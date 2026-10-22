---
name: Alif Nayem Portfolio
description: A systems architect's field atlas, rendered in graphite, chalk, copper and sage.
colors:
  graphite: "#111311"
  graphite-raised: "#171a17"
  graphite-panel: "#20241f"
  chalk: "#eeeae0"
  chalk-section: "#e9e5db"
  text-muted: "#a7aaa0"
  text-quiet: "#7d8379"
  divider: "#383d36"
  signal-copper: "#d18c65"
  status-sage: "#a7b69c"
  proof-sage: "#a8b39c"
typography:
  display:
    fontFamily: "Adwaita, Arial, sans-serif"
    fontSize: "clamp(68px, 7.2vw, 104px)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.065em"
  body:
    fontFamily: "Adwaita, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  page-gutter: "clamp(24px, 7.2vw, 112px)"
  page-gutter-tablet: "6vw"
  page-gutter-mobile: "22px"
  section-desktop: "132px 0"
  section-tablet: "105px 0"
  section-mobile: "82px 22px"
  compact: "8px"
  standard: "16px"
components:
  button-primary:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.graphite-raised}"
    rounded: "{rounded.square}"
    padding: "13px 17px"
  button-contact:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.square}"
    padding: "15px 17px"
  project-panel:
    backgroundColor: "{colors.graphite-panel}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.square}"
    padding: "0"
  expertise-tag:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.square}"
    padding: "6px 9px"
  scene-control:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.square}"
    size: "29px"
    height: "27px"
---

# Design System: Alif Nayem Portfolio

## Overview

**Creative North Star: "The Systems Field Atlas"**

This visual world treats autonomous software as something that can be inspected: a layered instrument with signal paths, component planes and measured outcomes. The composition uses an editorial split hero, a cutaway 3D system model, numbered annotations and project diagrams. The visual language is grounded and technical, with open space around large typography and compact drafting labels that make dense expertise scannable.

The implementation pairs a dark graphite field with chalk interludes, warm copper signals and sage status details. Local Adwaita and JetBrains Mono font files keep the display and instrument language together without a remote font dependency. The Three.js scene is illustrative and interactive; the project evidence remains available as semantic HTML if WebGL or motion is unavailable.

**Key Characteristics:**
- Editorial architecture rather than a standard centered portfolio hero
- Layered system cutaway with inspectable five-stage loop
- Dark technical field interrupted by chalk manifesto and profile sections
- Precise mono labels, restrained borders and diagrammatic project evidence

## Colors

The palette is a low-chroma engineering field, using chalk for readable contrast, copper for signal and sage for status and operational proof.

### Primary
- **Signal Copper** (#d18c65): Emphasis in headline italics, links, stage markers, model conduits and the primary signal in project diagrams.
- **Status Sage** (#a7b69c): Status accents, labels, system-model surfaces, tag borders and the light operational-results band uses its neighboring proof-sage token.

### Secondary
- **Proof Sage** (#a8b39c): Full-width results band that reverses the dark page into a high-contrast proof surface.

### Neutral
- **Graphite** (#111311): Main page background and darkest field.
- **Raised Graphite** (#171a17): Navigation and small control surfaces.
- **Panel Graphite** (#20241f): Project diagrams and raised visual layers.
- **Chalk** (#eeeae0): Main text and light action buttons.
- **Chalk Section** (#e9e5db): Manifesto and about sections; creates a clear light/dark rhythm.
- **Muted Text** (#a7aaa0): Secondary text and quiet labels on dark fields.
- **Quiet Text** (#7d8379): Low-priority labels.
- **Divider** (#383d36): Structural rules and section borders.

### Named Rules
- **The Signal Rule.** Reserve copper for meaningful emphasis, active stages and navigable actions; do not use it as a general decoration.
- **The Field Rule.** Use sage for status and system evidence, with the lighter proof band reserved for quantified outcomes.

## Typography

Adwaita Sans is served from the project's local `assets/AdwaitaSans-Regular.ttf` file and handles display and body copy. JetBrains Mono is served from `assets/JetBrainsMono-Regular.ttf` and marks coordinates, indices, technical labels and metadata. The type system pairs compressed, large, low-weight headlines with calm body paragraphs and small uppercase instrumentation labels. At mobile sizes, heading clamps and selected dense labels adjust upward in the final CSS overrides for legibility.

### Named Rules
- **The Instrument Label Rule.** Mono labels should identify a section, state, stage, technology or coordinate; keep explanatory reading in Adwaita Sans.
- **The Headline Rule.** Large headlines use regular weight, tight tracking and compact leading; copper italics carry the single phrase of emphasis.

## Layout

Desktop uses a narrow top rail and a two-column hero: copy occupies the left field and the Three.js cutaway fills the right. Subsequent sections alternate between paired editorial columns, three featured project records, a five-row numbered project index completing an eight-project portfolio, a four-part data-location matrix, a full-width result band, compact skill rows and a final contact spread. Page gutters use a fluid clamp from 24px to 112px at desktop, shift to 6vw below 900px and settle at 22px on mobile.

At 900px and below, the hero stays two-column, project media narrows, the five-row index shifts its side link column inward and the data-location matrix becomes two columns. At 640px and below, the hero stacks text above the 3D scene, navigation links hide while contact remains, project grids and the profile layout become single-column, project-index links wrap below each row, the data-location matrix becomes one column, skill labels wrap beneath their category, and the footer becomes a two-column arrangement. Section vertical padding contracts from 132px to 105px to 82px at these ranges. The hero itself keeps a substantial scene height on mobile so the model remains a distinct moment without overlaying the reading flow.

### Named Rules
- **The Inspection Rule.** Keep the model beside its thesis on wide screens and place it after the thesis on narrow screens; never let it cover copy.
- **The Evidence Rule.** Give each project its own large diagram and outcome. Keep links adjacent to the project evidence they open.

## Elevation & Depth

Depth comes from layered Three.js meshes, softly lit material planes, thin copper and sage conduits, a low-opacity coordinate grid and restrained panel shadows. As the visitor scrolls through the manifesto and selected work, GSAP scrubs the model's yaw and vertical position; the project diagrams reveal with a one-time clipped entrance. CSS project artwork uses bordered graphite panels, elliptical routes and node blocks rather than a generic raised-card grid. The interface itself stays largely flat; elevation is reserved for the system object and diagram nodes. The WebGL renderer caps pixel ratio at 1.5 and uses low-power preference.

### Named Rules
- **The Cutaway Rule.** Let layering explain system structure. Keep light, rings and glows subordinate to the blocks and conduits they clarify.
- **The Instrument Rule.** Borders, coordinates and diagram lines define depth more often than broad shadows.

## Shapes

Panels, buttons, labels and diagram blocks use square corners. Circular geometry belongs to the 3D orbit, the model core and small stage details; it is not a general card treatment. Thin one-pixel rules and compact outlines make the interface feel drafted and inspectable. The scene fallback uses a circular ring and core so the visual idea remains present when WebGL cannot initialize.

### Named Rules
- **The Square Instrument Rule.** Keep interface components square-edged; reserve circles for model geometry and isolated stamps.

## Components

- **Top rail:** Wordmark, compact section navigation and an underlined conversation action; the navigation is hidden below 640px while the action stays visible.
- **Primary action:** Chalk rectangular button with dark text and a small directional arrow. The contact action uses the same shape and a wider, balanced label-and-arrow alignment.
- **Interactive model:** Three.js cutaway with a labeled five-stage loop, drag and arrow-key inspection, explicit rotate controls and a pause/resume toggle. A CSS fallback remains visible until WebGL succeeds.
- **Project records:** Numbered category line, editorial description, CV-grounded outcome, compact technology line, external link and a project-specific diagram panel.
- **Project context and case-study links:** Small bordered context notes sit beneath outcomes when evidence needs a scope or deployment qualifier. A distinct underlined case-study link follows the live-system action. The index below uses five ruled rows, copper project IDs, sage status labels and right-aligned links to live work, source code or a case study.
- **Data-location matrix:** Four boundary records explain where project data resides and whether inference is client-controlled, browser-local, offline on-device or designed for local execution. It uses a restrained four-column rule grid, then two columns at tablet and a single ruled list on mobile.
- **Expertise inventory:** Four lettered rows group AI & orchestration, backend & infrastructure, product & interfaces, and security & automation. Skills appear as individually outlined labels that wrap naturally at smaller widths.
- **Security inventory:** The security row names Kali Linux, Nmap, Burp Suite, Metasploit, Wireshark, sqlmap, Hydra, Hashcat, Shodan, Maltego and Aircrack-ng, alongside OSINT, penetration testing, n8n, webhooks and Gmail, Calendar, WhatsApp and Twilio APIs.
- **Profile facts and origin note:** Light chalk panel with concise metadata, education/credential note, the founder's first-computer and game-data origin story, a local CV download and the existing sim-racing instrument-panel reference.
- **Available contact:** The closing chalk action links to a 30-minute strategy-call booking page; the secondary email line states the 72-hour reply expectation.
- **Focus and access:** A skip link appears on keyboard focus; links, buttons and the model focus target use a visible copper outline. Content stays semantic and usable without the canvas.

### Named Rules
- **The Evidence Before Flourish Rule.** Put the claim, metric and project context in readable HTML; diagrams reinforce rather than contain essential information.

## Do's and Don'ts

### Do
- Do keep the graphite, chalk, copper and sage roles consistent.
- Do use mono for concise operational labels and Adwaita Sans for reading.
- Do give each project a distinct diagram built around its real workflow.
- Do preserve the difference between a live demo, a self-hosted deployment intention and internally reported performance; the small context note carries these qualifiers.
- Do represent each data boundary with its explicit location and inference caveat.
- Do keep the extra project rows as ruled records with clear status and distinct destination links.
- Do keep canvas interaction operable by pointer, keyboard and explicit controls.
- Do preserve semantic fallback content and visible focus treatment.
- Do respect `prefers-reduced-motion` by removing GSAP choreography and disabling continuous scene rotation.

### Don't
- Don't invent client names, testimonials or outcome metrics.
- Don't make the canvas the only source of a project's meaning.
- Don't add gradients, glows or motion where they obscure the system's structure.
- Don't use circular cards or generic uniform project tiles.
- Don't force horizontal skill overflow on mobile.
