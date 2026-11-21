/**
 * The AI referrers worth measuring.
 *
 * Why this list exists:
 *   The site's whole reason for being findable by an answer engine is that
 *   people are asking ChatGPT, Perplexity, Claude and Gemini which facial spa
 *   in San Diego to book, and the answer engine cites a page. That citation
 *   arrives as an ordinary referral — GA4 records it as a session source
 *   like any other, which means it disappears into a list of a hundred
 *   sources and is never looked at.
 *
 *   A session from one of these hosts is the single most valuable session
 *   the site gets, because it is a person who asked a question about
 *   corrective facials and was told about this studio. It should be countable
 *   without a spreadsheet.
 *
 *   These are the hosts that send a referral when a model links a source.
 *   The list is deliberately explicit rather than a pattern, because a
 *   pattern over "ai" in a hostname catches things like "chairlifts.com".
 */
export const aiReferrerHosts = [
  'chatgpt.com',
  'chat.openai.com',
  'openai.com',
  'perplexity.ai',
  'perplexity.com',
  'claude.ai',
  'anthropic.com',
  'copilot.microsoft.com',
  'gemini.google.com',
  'bard.google.com',
  'you.com',
  'phind.com',
  'poe.com',
  'mistral.ai',
  'huggingface.co',
  'kagi.ai',
  'andisearch.com',
  'duckduckgo.com',
  'search.brave.com',
  'yandex.com',
];
