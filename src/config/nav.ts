/**
 * The navigation.
 *
 * Two lists, because the site has two top-level sections and they answer
 * different questions:
 *
 *   - `serviceLinks` — WHAT we do. The eleven services, each linking to its
 *     service hub. Rendered in the header overlay and the footer.
 *   - `areaLinks` — WHERE we serve. The ten areas, each linking to the
 *     service-and-city pages for it. Footer only.
 *
 * Both are rendered on every page, which is the internal-linking mesh the
 * reference site uses: every page can reach every other page in one click,
 * so nothing in the cluster is an orphan.
 */

/** The services, in menu order — the entry point first, then by category. */
export const serviceLinks = [
  { label: 'Facial', href: '/services/facial/' },
  { label: 'HydraFacial', href: '/services/hydrafacial/' },
  { label: 'Chemical Peels', href: '/services/chemical-peel/' },
  { label: 'Dermaplaning', href: '/services/dermaplaning/' },
  { label: 'Microneedling', href: '/services/microneedling/' },
  { label: 'Scalp Therapy', href: '/services/scalp-therapy/' },
  { label: 'DMK Enzyme Therapy', href: '/services/dmk-enzyme-therapy/' },
  { label: 'Acne Treatment', href: '/services/acne-treatment/' },
  { label: 'Hyperpigmentation Treatment', href: '/services/hyperpigmentation-treatment/' },
  { label: 'Melasma Treatment', href: '/services/melasma-treatment/' },
  { label: 'Corrective Skin Treatments', href: '/services/corrective-skin-treatments/' },
] as const;

export const primaryNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Areas We Serve', href: '/service-areas/' },
  { label: 'Results', href: '/gallery/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Membership', href: '/membership/' },
  { label: 'Melanin-Rich Skin', href: '/melanin-rich-skin/' },
  { label: 'About', href: '/about/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/**
 * Footer only. Kept out of primaryNav so the nav overlay and the 404 page
 * stay short — those render primaryNav in full.
 *
 * Anchors here are deliberately bare: geo-modified anchor text belongs on the
 * hub pages, where it is contextual. Sitewide footer links carrying "in San
 * Diego" nine times reads as manipulation.
 */
export const areaLinks = [
  { label: 'La Jolla', href: '/service-areas/la-jolla/' },
  { label: 'Encinitas', href: '/service-areas/encinitas/' },
  { label: 'Carlsbad', href: '/service-areas/carlsbad/' },
  { label: 'Chula Vista', href: '/service-areas/chula-vista/' },
  { label: 'Del Mar', href: '/service-areas/del-mar/' },
  { label: 'La Mesa', href: '/service-areas/la-mesa/' },
  { label: 'North Park', href: '/service-areas/north-park/' },
  { label: 'Point Loma', href: '/service-areas/point-loma/' },
  { label: 'Pacific Beach', href: '/service-areas/pacific-beach/' },
  { label: 'Hillcrest', href: '/service-areas/hillcrest/' },
] as const;

/** Spec §2: Vagaro is request-based. Asserted by the guard suite. */
export const CTA_LABEL = 'Request Appointment';
