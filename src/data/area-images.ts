import type { ImageMetadata } from 'astro';

import laJolla from '../assets/hero-la-jolla-keravive-scalp-ocean-swimmers-san-diego.jpg';
import encinitas from '../assets/hero-encinitas-dmk-enzyme-therapy-surfer-barrier-repair-san-diego.jpg';
import carlsbad from '../assets/hero-carlsbad-procell-keravive-series-planning-san-diego.jpg';
import chulaVista from '../assets/hero-chula-vista-lira-peel-melanin-rich-skin-expertise-san-diego.jpg';
import delMar from '../assets/hero-del-mar-procell-microchanneling-fair-season-uv-damage-san-diego.jpg';
import laMesa from '../assets/hero-la-mesa-lira-peel-melasma-inland-uv-fitzpatrick-san-diego.jpg';
import northPark from '../assets/hero-north-park-hydrafacial-series-melanin-rich-skin-san-diego.jpg';
import pacificBeach from '../assets/hero-pacific-beach-lira-chemical-peel-sun-damage-san-diego.jpg';
import pointLoma from '../assets/hydrafacial-point-loma-san-diego.jpg';
import hillcrest from '../assets/hydrafacial-hillcrest-san-diego.jpg';

/**
 * The hero photograph for each area.
 *
 * A service-and-city page leads with a full-bleed image, so the picture
 * has to be the city's — a La Jolla page showing Carlsbad's coast would
 * undercut the page's only claim. Where a service has its own treatment
 * photograph, that takes precedence in the template; this is the
 * city-level fallback.
 */
export const areaImages: Record<string, ImageMetadata> = {
  'la-jolla': laJolla,
  encinitas,
  carlsbad,
  'chula-vista': chulaVista,
  'del-mar': delMar,
  'la-mesa': laMesa,
  'north-park': northPark,
  'pacific-beach': pacificBeach,
  'point-loma': pointLoma,
  hillcrest,
};

/**
 * The alt text for each area image.
 *
 * Alt text describes what is in the photograph, not what the page is
 * selling. The guard suite checks that every content image has one.
 */
export const areaImageAlts: Record<string, string> = {
  'la-jolla': 'Keravive scalp treatment for La Jolla ocean swimmers addressing salt water and UV damage',
  encinitas: 'DMK Enzyme Therapy for Encinitas surfers addressing salt water barrier damage',
  carlsbad: 'Procell Microchanneling series planning for Carlsbad clients',
  'chula-vista': 'LIRA chemical peel for Chula Vista clients treating melanin-rich skin',
  'del-mar': 'Procell Microchanneling for Del Mar clients after fair-season sun exposure',
  'la-mesa': 'LIRA chemical peel for melasma at La Mesa, inland from the marine layer',
  'north-park': 'HydraFacial series for North Park clients',
  'pacific-beach': 'LIRA chemical peel for sun damage in Pacific Beach',
  'point-loma': 'HydraFacial treatment for Point Loma clients',
  hillcrest: 'HydraFacial treatment for Hillcrest clients',
};
