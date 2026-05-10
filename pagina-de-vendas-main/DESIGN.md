---
name: Kinetic Horizon
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434656'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#b71422'
  on-secondary: '#ffffff'
  secondary-container: '#db3237'
  on-secondary-container: '#fffbff'
  tertiary: '#00575d'
  on-tertiary: '#ffffff'
  tertiary-container: '#007179'
  on-tertiary-container: '#89f5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930014'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered to evoke a sense of high-performance vitality and premium technological precision. It targets an active, tech-savvy audience that values both aesthetic edge and functional clarity. 

The style is a sophisticated blend of **Modern Minimalism** and **Glassmorphism**. It utilizes expansive white space to let the "Electric Blue" and "Neon Coral" accents resonate with maximum energy. The interface feels "airy" through the use of translucent layers and soft, colorful gradients that mimic the refraction of light on high-end glass watch faces. This approach ensures a tech-forward atmosphere that is simultaneously clean and hyper-energetic.

## Colors

This design system utilizes a high-contrast palette optimized for energy and legibility. 

- **Primary (Electric Blue):** Used for core actions, primary branding, and interactive states. It represents stability and advanced technology.
- **Secondary (Neon Coral):** Used for high-energy highlights, sale indicators, and health-tracking motifs. 
- **Tertiary (Cyan/Aqua):** Employed sparingly for data visualization and subtle glows to enhance the "tech" feel.
- **Backgrounds:** A crisp white (#FFFFFF) is the primary base, with a very light cool gray (#F8F9FA) used for section nesting and subtle structural separation.
- **Gradients:** Vibrant linear gradients between the blue and coral are used for hero backgrounds and premium buttons to create a sense of movement.

## Typography

The typography leverages **Inter** for its industrial clarity and exceptional legibility at all scales. Heavy weights (ExtraBold/Black) are utilized for headlines to create "impact zones" that contrast sharply against the light background. 

**Space Grotesk** is introduced as a secondary label font to inject a technical, futuristic edge to small metadata, tags, and overlines. Text should primarily be set in a deep charcoal (#1A1A1A) to maintain high contrast while avoiding the harshness of pure black.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop (12 columns) to maintain a premium, editorial feel, transitioning to a fluid model for mobile. 

A generous spacing rhythm is essential; the "airy" feel is achieved by using large vertical gaps (120px+) between major landing page sections. Content should be grouped using an 8px base grid, ensuring that internal component padding is tight and precise, while external margins are expansive. Use asymmetrical layouts for product showcases to suggest speed and dynamic movement.

## Elevation & Depth

Depth is communicated through **Ambient Shadows** and **Glassmorphism** rather than traditional heavy dropshadows.

- **Soft Elevation:** Elevated cards use a very large blur radius (30px-50px) with low opacity (5-8%) and a subtle tint of Electric Blue to prevent the shadow from looking muddy.
- **Glass Layers:** Floating navigation bars and feature overlays should use a background blur (15px-25px) combined with a 1px semi-transparent white border.
- **Depth Contrast:** Use "Coral" glows behind product renders to create a halo effect, pushing the product forward in the visual hierarchy.

## Shapes

The design system uses a **Rounded** language to mirror the hardware of a smartwatch. 

Standard components (Cards, Inputs) utilize a 0.5rem (8px) radius. Larger containers or feature sections should use the `rounded-xl` (1.5rem) setting to feel more organic. Interactive elements like buttons and category chips should leverage "Pill" shapes (full rounding) to encourage touch interaction and reinforce the athletic, friendly nature of the brand.

## Components

- **Buttons:** Primary buttons use the vibrant blue-to-coral gradient with white bold text. Secondary buttons are "Ghost" style with a 2px Electric Blue border. All buttons should have a subtle scale-up effect on hover.
- **Cards:** Product cards utilize the softest shadow tier and a white background. On hover, the 1px border should transition from light gray to Electric Blue.
- **Input Fields:** Search and form fields use the light gray neutral background with a "soft" (0.5rem) corner radius. Focus states are indicated by a 2px Electric Blue glow.
- **Chips/Badges:** Small, pill-shaped markers for "New" or "Limited Edition" should use high-saturation Neon Coral with white text.
- **Status Indicators:** For health metrics or connectivity, use circular pips with an outer "breath" animation glow in either Cyan or Coral.
- **Smartwatch Carousel:** A specialized component featuring a large central product image with translucent "Glassmorphic" spec cards floating to the left and right.