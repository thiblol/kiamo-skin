# Service Areas Hub - Hero Image Prompt
**Nano Banana Pro | San Diego Service Areas Landing Page**

Following the KIAMO SKIN visual identity from gbp-image-prompts.md and hydrafacial-location-image-prompts.md

---

## IMAGE CONCEPT: SAN DIEGO MAP WITH SERVICE AREAS

**Visual Approach:** Stylized San Diego County map with Mission Hills studio pin highlighted, 9 service area zones marked with subtle radius indicators showing travel distances. Modern, minimal design that communicates geographic coverage without looking like a Google Maps screenshot.

---

## MASTER STYLE LOCK
**Use this complete prompt in Google AI Studio or Gemini App with Nano Banana Pro:**

```
Professional brand photography for medical aesthetics studio. Modern minimal design aesthetic. San Diego County map visualization with clean geometry and warm color palette. Warm cream/blush tones RGB(199,159,143) as background. Dark charcoal accents RGB(43,43,41). Rose accent color RGB(186,96,96) for highlights and pins. Soft diffused lighting. High-end editorial style - Kinfolk meets clinical precision. Clean, uncluttered composition. No text overlays except location markers. 4:5 portrait orientation (1080x1350px). Shot on Canon EOS R5, RF 50mm f/1.2L, ISO 200, f/4, 1/250s for sharp focus across entire frame.

Stylized San Diego County map showing geographic service coverage. Central Mission Hills studio location marked with prominent rose-colored pin. Nine service areas indicated with subtle circular radius zones: North Park (closest, 3.5 miles), La Jolla (18 min), Chula Vista (25 min), Pacific Beach, Downtown, Encinitas, Carlsbad, La Mesa, Del Mar. Major arterials indicated: I-5 corridor (vertical), I-8 (east-west), SR-163. Coastal neighborhoods shown in lighter tone, inland areas in warmer tone to indicate climate zones. Clean sans-serif typography for area names. Distance markers in minutes, not miles. Map should feel professional and editorial, not corporate or GPS-like. Minimal design with generous white space. Pacific Ocean indicated on left edge as subtle gradient. Studio location (Mission Hills) prominently centered with "KIAMO SKIN" label. Warm, inviting color palette consistent with brand identity.
```

---

## ALTERNATIVE CONCEPT: TREATMENT ROOM WITH EQUIPMENT

If map approach doesn't render well, use this alternative:

```
Professional medical aesthetics photography. Clinical luxury aesthetic. Warm cream walls RGB(199,159,143), dark charcoal floor. Soft diffused window light from camera-left creating gentle shadows. Shot on Canon EOS R5, RF 50mm f/1.2L, ISO 400, f/2.8, 1/125s. Shallow depth of field. Color grading: warm highlights +8, shadows -5, midtones slightly desaturated for clinical feel. High-end spa photography style - Aman Resorts meets clinical dermatology. 4:5 portrait orientation.

Mission Hills treatment room interior at 3067 Reynard Way. HydraFacial Syndeo machine visible and prominent (the clinical-tier platform, not consumer model) on medical cart. Procell MD microchanneling device visible. Medical-grade LED panel visible on adjustable stand showing red therapeutic wavelengths. Treatment bed with clean white linens in soft focus. Product shelves in background showing DMK, Lira Clinical, Colorescience bottles. Single window with sheer curtain providing natural light. Room should feel intimate, clinical, and professional - one client at a time. Equipment should look medical-grade, not spa consumer devices. Warm, inviting but clinical. No people in frame. Focus on equipment quality and clinical environment. Subtle "Mission Hills, San Diego" text element on wall or visible through window (optional).
```

---

## TECHNICAL SPECIFICATIONS

**After Generation:**
1. Save as `hero-service-areas-san-diego-corrective-facials.jpg`
2. Move to `src/assets/`
3. Import in service-areas/index.astro:
   ```ts
   import heroServiceAreas from '../../assets/hero-service-areas-san-diego-corrective-facials.jpg';
   ```
4. Add Image component in header section before H1
5. Test build for proper optimization

**Image specifications:**
- Orientation: 4:5 portrait (1080x1350px) OR 16:9 landscape (1920x1080px) for map
- Format: JPG
- Quality: High (80-90%)
- File size target: < 500KB after optimization
- Alt text: "San Diego corrective facial service areas - KIAMO Skin serves 9 areas from Mission Hills studio"

---

## USAGE NOTES

**Map Concept:** Best for showing geographic authority and travel commitment. Visualizes the "68% travel 20+ minutes" stat. Makes distance/convenience objection feel shared (everyone travels).

**Equipment Concept:** Best for showing clinical authority and equipment depth. Reinforces "clinical-grade vs spa tools" positioning from comparison section.

**Recommendation:** Try map concept first. If Nano Banana Pro struggles with map rendering or it looks too corporate/GPS-like, fall back to equipment shot.

---

**Generation Date:** 2026-09-04  
**Source Framework:** KIAMO GBP Image Prompt System + Nano Banana Pro + Service Areas Hub Optimization
