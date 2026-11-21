import { areaShells } from './area-shells';
import { serviceAreaContent } from './service-areas';
import { serviceAreaContentMelasmaA } from './service-areas-melasma-a';
import { serviceAreaContentMelasmaB } from './service-areas-melasma-b';
import { serviceAreaContentHyperpigA } from './service-areas-hyperpig-a';
import { serviceAreaContentHyperpigB } from './service-areas-hyperpig-b';
import { serviceAreaContentScalp } from './service-areas-scalp';
import type { ServiceAreaRecord, ServiceAreaContent } from './service-area-types';

/**
 * The service×city records, fully merged.
 *
 * The pair-specific content (service-areas.ts and the volume-led set that
 * follows it) and the area shell (area-shells.ts) are kept apart so each is
 * edited once. This module joins them at read time, and is the only place
 * that knows how.
 */

/** The keys are `{service}:{area}`. */
const shellBySlug = Object.fromEntries(areaShells.map((s) => [s.slug, s]));

/**
 * Every pair's content, in one map.
 *
 * The core twenty-five live in service-areas.ts. The volume-led set — the
 * concern treatments and scalp therapy, across the cities whose terms carry
 * measured search demand — live in their own files so that a long piece of
 * copy is edited in one place rather than inside a file that also holds
 * twenty-five others.
 */
const allContent: Record<string, ServiceAreaContent> = {
  ...serviceAreaContent,
  ...serviceAreaContentMelasmaA,
  ...serviceAreaContentMelasmaB,
  ...serviceAreaContentHyperpigA,
  ...serviceAreaContentHyperpigB,
  ...serviceAreaContentScalp,
};

export const serviceAreas: ServiceAreaRecord[] = Object.entries(allContent).map(
  ([k, content]) => {
    const shell = shellBySlug[content.area as string];
    if (!shell) {
      throw new Error(`No area shell for "${k}" (area "${content.area}")`);
    }
    return {
      ...content,
      ...shell,
      /**
       * The pair's own capsule wins when it has one.
       *
       * The shell carries a city-wide answer — good for the area hub, wrong
       * for a page about one treatment in that city. The pair carries the
       * answer for THIS treatment in THIS city, which is the one worth
       * lifting into an AI answer. The core twenty-five pairs leave the
       * field empty and take the shell's; the volume-led pairs write their
       * own, and this is where theirs takes effect.
       */
      ...(content.quickAnswer ? { quickAnswer: content.quickAnswer } : {}),
    } as ServiceAreaRecord;
  },
);

/** One record. Returns undefined for a pair that does not exist. */
export const getServiceArea = (service: string, area: string) =>
  serviceAreas.find((r) => r.service === service && r.area === area);

/** Every pair under one service. */
export const getServiceAreasForService = (service: string) =>
  serviceAreas.filter((r) => r.service === service);

/** Every pair for one area — the service list on an area hub. */
export const getServiceAreasForArea = (area: string) =>
  serviceAreas.filter((r) => r.area === area);

/** The areas a service has a page for, in the order the grid renders them. */
export const getAreasForService = (service: string) =>
  getServiceAreasForService(service).map((r) => r.area);

/** The services available in one area. */
export const getServicesForArea = (area: string) =>
  getServiceAreasForArea(area).map((r) => r.service);

/**
 * The areas that have at least one service page.
 *
 * The area index lists these. The other shells exist for the schema and for
 * the service pages' link mesh, but an area with no service page has nothing
 * to offer a reader, so it does not get an index entry of its own.
 */
export const getCoveredAreas = () => {
  const covered = new Set(serviceAreas.map((r) => r.area));
  return areaShells.filter((s) => covered.has(s.slug));
};
