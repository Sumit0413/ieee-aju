# JHICON-2027 — 1st Jharkhand International Conference on Electrical Engineering, Signal Processing, and Advanced Computing Technologies for Sustainable Development (JHICON-2027)

Conference website for **JHICON-2027**, organized by **Arka Jain University** in collaboration with **IEEE**.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero with countdown, organizers, welcome message, about, key dates, sponsors, contact with map |
| `/about` | About the conference & Arka Jain University |
| `/committee` | Organizing committee, TPC, advisory board |
| `/call-for-papers` | Conference tracks, submission guidelines |
| `/key-dates` | Timeline of all deadlines |
| `/sponsors` | Technical co-sponsors & become-a-sponsor CTA |
| `/contact` | Contact form, address, embedded Google Map |
| `/register` | Registration portal (redirects to Google Form) |

## Project Structure

```
app/
├── layout.tsx                 # Root layout (Navbar + Footer)
├── page.tsx                   # Home page
├── globals.css                # Tailwind theme & global styles
├── icon.svg                   # Favicon (JGI logo)
├── about/page.tsx
├── committee/page.tsx
├── call-for-papers/page.tsx
├── key-dates/page.tsx
├── sponsors/page.tsx
├── contact/page.tsx
├── register/page.tsx
└── components/
    ├── Navbar.tsx              # Sticky nav, mobile hamburger
    ├── Footer.tsx              # 3-column footer
    ├── HeroSection.tsx         # Hero banner with background image + countdown
    ├── CountdownTimer.tsx      # Live countdown (client component)
    ├── SectionHeading.tsx      # Reusable section title
    ├── OrganizersSection.tsx   # Organizer cards
    ├── WelcomeMessage.tsx      # General chair welcome
    ├── KeyDatesCard.tsx        # Key dates sidebar card
    ├── AboutSnippet.tsx        # Homepage about teaser
    ├── SponsorsStrip.tsx       # Homepage sponsor logos
    └── ContactSection.tsx      # Contact form + Google Map (homepage)
```

## Configuration

- **Google Form URL** — Update `GOOGLE_FORM_URL` in `app/register/page.tsx` to link the Register button to your actual form.
- **Conference date** — Update `CONFERENCE_DATE` in `app/components/HeroSection.tsx` to change the countdown target.
- **Hero background** — Place your image at `public/image.png` (used by `HeroSection.tsx`).
- **Contact info** — Update email and address in `app/components/Footer.tsx`, `app/contact/page.tsx`, and `app/components/ContactSection.tsx`.
- **Committee members** — Update mock names/affiliations in `app/committee/page.tsx`.
- **Sponsors** — Update sponsor names in `app/sponsors/page.tsx` and `app/components/SponsorsStrip.tsx`.

## Deployment

Hosted on **Vercel**. Push to `main` to trigger auto-deploy.

```bash
# Or deploy manually
npx vercel
```

## Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```
