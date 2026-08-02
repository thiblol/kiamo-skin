/** Shared by the header overlay and the footer. */
export const treatmentLinks = [
  { label: 'HydraFacial', href: '/treatments/hydrafacial' },
  { label: 'Keravive Scalp Therapy', href: '/treatments/keravive-scalp' },
  { label: 'DMK Enzyme Therapy', href: '/treatments/dmk-enzyme-therapy' },
  { label: 'Procell Microchanneling', href: '/treatments/procell-microchanneling' },
  { label: 'Lira Chemical Peels', href: '/treatments/lira-peels' },
  { label: 'Dermaplaning', href: '/treatments/dermaplaning' },
] as const;

export const primaryNav = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'Melanin-Rich Skin', href: '/melanin-rich-skin' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book', href: '/book' },
] as const;

/**
 * Footer only. Kept out of primaryNav so the nav overlay and the 404 page stay
 * short — those render primaryNav in full.
 *
 * Anchors here are deliberately bare: geo-modified anchor text belongs on the
 * hub pages, where it is contextual. Sitewide footer links carrying "in San
 * Diego" nine times reads as manipulation.
 */
export const areaLinks = [
  { label: 'Mission Hills', href: '/service-areas/mission-hills' },
  { label: 'La Jolla', href: '/service-areas/la-jolla' },
  { label: 'North Park', href: '/service-areas/north-park' },
  { label: 'Pacific Beach', href: '/service-areas/pacific-beach' },
  { label: 'Chula Vista', href: '/service-areas/chula-vista' },
  { label: 'La Mesa', href: '/service-areas/la-mesa' },
  { label: 'Del Mar', href: '/service-areas/del-mar' },
  { label: 'Encinitas', href: '/service-areas/encinitas' },
  { label: 'Carlsbad', href: '/service-areas/carlsbad' },
] as const;

/** Spec §2: Vagaro is request-based. Asserted by the guard suite. */
export const CTA_LABEL = 'Request Appointment';
