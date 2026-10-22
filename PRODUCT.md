# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Assumption, not confirmed by the user: static HTML, CSS and JavaScript with Three.js and GSAP 3.15 loaded from a CDN. This keeps the portfolio deployable as a static site and supports the requested 3D and scroll animation.

## Users

Assumption from the request and CV: prospective clients, technical collaborators and employers evaluating Alif Hossain Nayem's systems architecture and software delivery work.

## Product Purpose

Present Alif's experience, selected projects and technical expertise as a professional portfolio. Success means a visitor can understand his focus, inspect credible work and contact him.

## Positioning

An AI systems architect and founder who connects multi-agent orchestration, private knowledge infrastructure and full-stack delivery to practical operating outcomes. Supporting project evidence and metrics come from the supplied CV.

## Operating Context

Alif is based in Dhaka, Bangladesh and the CV states an international client focus. The site is being created locally as a static portfolio.

## Capabilities and Constraints

- Show selected work, experience, technical skills, project links and contact details from the supplied CV.
- Treat CV claims and metrics as source material. Do not add clients, testimonials, certifications, results or project details that are not in the CV.
- Use a Three.js scene and GSAP animation as requested, with a readable non-WebGL fallback, responsive layout, keyboard support and reduced-motion behavior.
- Main action assumption: contact Alif. A CV download may be included using the supplied CV.
- No deployment target was provided. Keep the build static and local.

## Brand Commitments

The user's explicit direction is a 3D, professional, aesthetic and premium portfolio with advanced GSAP animation and visible expertise. Specific colors and typography remain open.

## Evidence on Hand

- Source CV: `/home/omen39/Documents/CV/A. Nayem - Professional CV.docx`
- Project URLs in the CV: `trisien-automence.vercel.app`, `trisien-vault.vercel.app`, `trisien-crm.vercel.app`, `multi-agent-daily.vercel.app`, `a-nayem.vercel.app`
- Contact details in the CV: `alifnayem39@gmail.com`, `+880-188-1759676`, GitHub `a-nayem`, LinkedIn `alifnayem`
- The CV includes project metrics for lead response time, lead processing and workflow automation. No testimonials or client logos were supplied.
- Supplemental first-party source: `https://a-nayem.vercel.app` and its `/about`, `/skills`, `/projects`, `/contact`, `/elusive` and project detail routes. This source expands the listed projects to eight, describes 5+ live deployments, adds personal origin details, current availability and precise project/security boundaries.
- Keep project status precise: the CRM speed comparison is based on internal testing with synthetic demo data and is not validated on live client volume. The Vault per-client deployment is in development. MultiAgent OS workspace data and its API key remain browser-local, while inference requests go to Gemini or OpenRouter. Quizzen is a fully offline personal R&D app with 2,400 questions across six domains; two more domains are in development.
- Do not transfer the existing site's security header and no-third-party-script claims to this separate static portfolio. This build uses CDN-loaded Three.js and GSAP.

## Product Principles

- Show working systems and outcomes rather than generic claims.
- Keep every project claim traceable to the CV.
- Make technical expertise easy to scan without turning the page into a dashboard.
- Make motion support the story and keep the content accessible without it.

## Accessibility & Inclusion

Keep all essential content in semantic HTML. Provide keyboard-operable navigation, visible focus, canvas fallback text and reduced-motion behavior. Maintain readable contrast and a useful small-screen experience.
