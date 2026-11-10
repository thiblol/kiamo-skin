import type { ServiceAreaContent } from './service-area-types';

/**
 * The openers for the facial cluster pairs.
 *
 * The facial cluster records carry a long `intro` but no separate deck line —
 * the deck was introduced with the service hubs, and these eight records
 * predate it. Rather than invent a second paragraph of copy for each, the
 * opener here is the short, specific claim that belongs above the fold: what
 * this treatment is for this client, and what the studio does about it.
 *
 * Everything else about these pairs is composed from facial-areas.ts.
 */
export const openers: Record<string, string> = {
  'facial:la-jolla':
    'A facial for ocean-exposed skin, selected to fit the barrier on the day. Performed by Kiki, a California licensed esthetician.',
  'facial:encinitas':
    'A facial that treats barrier damage from surf and salt air, not a refresh that flattens it. Performed by Kiki, a California licensed esthetician.',
  'facial:carlsbad':
    'A facial chosen for the skin rather than from a menu, with the full course mapped at the first appointment. Performed by Kiki, a California licensed esthetician.',
  'facial:del-mar':
    'A facial for sun damage and uneven tone, paced across a series. Performed by Kiki, a California licensed esthetician.',
  'facial:north-park':
    'A facial ten minutes away, with the plan set around the skin rather than the calendar. Performed by Kiki, a California licensed esthetician.',
  'facial:point-loma':
    'A facial that rebuilds the barrier salt air and wind strip out of skin. Performed by Kiki, a California licensed esthetician.',
  'facial:pacific-beach':
    'A facial for coastal sun damage and congestion, with the modifier selected for the skin on the day. Performed by Kiki, a California licensed esthetician.',
  'facial:hillcrest':
    'A facial five minutes away, chosen for uneven tone and texture rather than a fixed menu. Performed by Kiki, a California licensed esthetician.',
};
