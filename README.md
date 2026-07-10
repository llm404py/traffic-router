# GameHelp India

Independent consumer-safety portal for online-game payment, account and APK issues.

## Scope

This project is intentionally not a gaming affiliate funnel. It does not include:

- real-money game referrals
- deposit or bonus links
- APK downloads
- hidden redirects
- official-support impersonation
- OTP, UPI PIN, KYC or banking-data collection

It provides evidence checklists, complaint drafting and official cybercrime reporting links.

## Stack

- Astro 5 static output
- TypeScript
- Astro Sitemap
- Vercel-compatible configuration
- No database
- No analytics or advertising tracker

## Routes

- `/` — safety hub
- `/help/` — complete help library
- `/help/[slug]/` — 15 curated intent pages
- `/tools/complaint-draft/` — client-only complaint text generator
- `/about/`, `/editorial-policy/`, `/privacy/`, `/disclaimer/`

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Automated workflow

`.github/workflows/ci.yml` runs automatically on every push to `main` and every pull request:

1. checks out the repository
2. installs the locked dependencies with `npm ci`
3. runs the content/safety tests
4. type-checks and builds Astro
5. uploads `dist/` as a seven-day GitHub artifact

The build will fail before deployment if tests, TypeScript checks or Astro generation fail.

## Deploy to Vercel

### Easiest option: Vercel Git integration

1. Import this GitHub repository in Vercel.
2. Framework preset: Astro.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Set `SITE_URL` to the final production URL.
6. Every push to `main` will be deployed by Vercel after its own build.

### GitHub Actions deployment

A manual production workflow is included at `.github/workflows/vercel-deploy.yml`. Add these GitHub Actions repository secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Add this repository variable:

- `SITE_URL` — for example `https://gamehelp-india.vercel.app`

Then open **Actions → Deploy to Vercel → Run workflow**. The deployment is manual by default so an initial push cannot fail due to missing secrets.

After deployment, verify `/sitemap-index.xml`.

The fallback production URL in `astro.config.mjs` is `https://gamehelp-india.vercel.app`. Change the variable if the Vercel project receives a different URL.

### Vercel plan note

The starter contains no monetisation. Vercel Hobby is restricted to personal, non-commercial usage. Before adding ads, paid services or other commercial monetisation, move to a compatible hosting plan/provider and update privacy disclosures.

## Optional independent Telegram community

Set at build time:

```bash
PUBLIC_SUPPORT_TELEGRAM=https://t.me/your_support_channel
```

The link appears only as an independent safety community. Admins must not collect money, OTPs, UPI PINs, passwords, KYC documents or distribute real-money game links/APKs.

## Content editing

All pSEO records live in:

`src/data/helpPages.ts`

A new route should be published only when it has:

- a distinct user problem
- neutral, original guidance
- evidence checklist
- safe escalation path
- clear non-affiliation notice
- no unsupported allegation
- human review

## Official emergency resource

For cyber financial fraud in India:

- Call `1930`
- Visit `https://cybercrime.gov.in/`

GameHelp India cannot submit complaints or recover money for users.
