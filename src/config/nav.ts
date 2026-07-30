/** Shared by the header overlay and the footer. */
export const treatmentLinks = [
  { label: 'HydraFacial', href: '/treatments/hydrafacial' },
  { label: 'Keravive Scalp Therapy', href: '/treatments/keravive-scalp' },
  { label: 'DMK Enzyme Therapy', href: '/treatments/dmk-enzyme-therapy' },
  { label: 'Procell Microchanneling', href: '/treatments/procell-microchanneling' },
  { label: 'Lira Chemical Peels', href: '/treatments/lira-peels' },
] as const;

export const primaryNav = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book', href: '/book' },
] as const;

/** Spec §2: Vagaro is request-based. Asserted by the guard suite. */
export const CTA_LABEL = 'Request Appointment';
