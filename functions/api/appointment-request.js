/**
 * POST /api/appointment-request
 * -----------------------------
 * The endpoint behind the homepage request form.
 *
 * A Cloudflare Pages Function. The `functions/` directory at the root of a
 * Pages project is picked up alongside the static Astro build, so the site
 * stays a static deployment and only this one route runs server-side.
 *
 * ENVIRONMENT
 * Set these as Cloudflare Pages environment variables (the API key as an
 * encrypted secret), under Settings → Environment variables:
 *
 *   RESEND_API_KEY           required. The Resend API key that sends the mail.
 *   APPOINTMENT_TO_EMAIL     optional. Where the enquiry goes. Defaults to
 *                            the studio's own address.
 *   APPOINTMENT_FROM_EMAIL   optional. The verified sending address. Defaults
 *                            to Resend's onboarding address, which only sends
 *                            to the account owner — enough for the form to be
 *                            working, and a reason to set a real one.
 *
 * WITHOUT THE KEY
 * The function refuses the request and says so. It never accepts an enquiry
 * it cannot deliver, and it never reports success for one it did not send —
 * the form reads that refusal and puts the phone number in front of the
 * reader instead. An enquiry is never lost silently.
 *
 * IT ALSO HANDLES A PLAIN FORM POST
 * With JavaScript off, the form posts here as a URL-encoded body. The
 * function sends the mail the same way and then redirects to the booking
 * page, so the reader ends up somewhere useful either way.
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_TO = 'kiamoskin@gmail.com';
const DEFAULT_FROM = 'onboarding@resend.dev';

/** Anything longer than this is a bot, not a person. */
const MAX_MESSAGE = 4000;

const clean = (value, max = 300) => {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, max);
};

/**
 * A simple, honest spam guard: a hidden field a person never fills in. It
 * filters the easy case without a captcha the reader has to solve.
 */
const isHoneypotTripped = (body) => clean(body.website) !== '';

const json = (payload, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

export const onRequestPost = async ({ request, env }) => {
  const isJson = (request.headers.get('content-type') || '').includes('application/json');

  let body = {};
  try {
    body = isJson ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    body = {};
  }

  const name = clean(body.name);
  const phone = clean(body.phone, 60);
  const email = clean(body.email, 200);
  const treatment = clean(body.treatment, 120);
  const message = clean(body.message, MAX_MESSAGE);

  // The honeypot answers as though it worked. A bot that gets a success
  // response stops trying; a person never sees this path.
  if (isHoneypotTripped(body)) {
    return isJson ? json({ ok: true }) : redirectToBooking();
  }

  if (!name || !phone) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    // Refused, not dropped. The form turns this into the phone number.
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const to = env.APPOINTMENT_TO_EMAIL || DEFAULT_TO;
  const from = env.APPOINTMENT_FROM_EMAIL || DEFAULT_FROM;

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    treatment ? `Treatment of interest: ${treatment}` : null,
    '',
    'Question:',
    message || '(none given)',
  ].filter((line) => line !== null);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email || undefined,
        subject: `Appointment request — ${name}`,
        text: lines.join('\n'),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('appointment-request: delivery failed', response.status, detail);
      return json({ ok: false, error: 'delivery_failed' }, 502);
    }

    return isJson ? json({ ok: true }) : redirectToBooking();
  } catch (error) {
    console.error('appointment-request: delivery threw', error);
    return json({ ok: false, error: 'delivery_failed' }, 502);
  }
};

/**
 * A JSON caller gets JSON. A plain form post gets a redirect to the booking
 * page, which is where a reader without JavaScript ends up either way.
 */
function redirectToBooking() {
  return new Response(null, {
    status: 303,
    headers: { Location: '/book/?sent=1' },
  });
}
