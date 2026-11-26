# Ashar Portfolio

A responsive Next.js portfolio built with the App Router. Project case-study pages include technology stacks, screenshot galleries, and scroll-triggered motion. Concept projects are labeled separately from selected work.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Personalize before publishing

- Replace `public/images/ashar-portrait.jpg` with the preferred portrait.
- Edit project names, descriptions, technology stacks, and screenshot paths in `lib/projects.ts`.
- The Royal AI POS and Cattle ERP entries are selected work. Their supplied screenshots are in `public/projects/royal-pos/screen-1.png` and `public/projects/cattle-erp/screen-1.png`.
- AI Smart Ledger is also selected work. Its supplied React Native app screen collage is in `public/projects/ai-smart-ledger/screen-1.png`.
- Newly proposed Shopify apps, management systems, and React Native apps are marked as concepts. Their AI features and interface previews describe ideas, not shipped functionality.
- Seven projects have three named screenshot slots each (21 slots total). Add the files at the paths below, then set each matching `src` in `lib/projects.ts` and remove `preview: true` on a slot when replacing its designed preview:
  - Royal AI POS: `public/projects/shopify-pos/preview-1.png` through `preview-3.png`.
  - Cattle ERP: `public/projects/livestock-erp/preview-1.png` through `preview-3.png`.
  - A2 Attire Storefront: `public/projects/a2attire-store/preview-1.png` through `preview-3.png`.
  - Insight CRM: `public/projects/insight-crm/preview-1.png` through `preview-3.png`.
  - AI Smart Ledger: `public/projects/smart-ledger/preview-1.png` through `preview-3.png`.
  - AI Attendance: `public/projects/ai-attendance/preview-1.png` through `preview-3.png`.
  - Cattle ERP IoT Monitor: `public/projects/cattle-iot-erp/preview-1.png` through `preview-3.png`.
- Supplied screenshots remain in their original project folders and appear as additional gallery items. Other projects can use `public/projects/<project-slug>/screen-<number>.png`; empty gallery frames show the expected path.
- Add another Shopify app by adding a project to the `projects` array in `lib/projects.ts`. Each project gets a detail route at `/work/<slug>`.
- Technology names, descriptions, and inline SVG icons are in `lib/projects.ts` and `components/tech-icon.tsx`.
- The client testimonials in `components/testimonials.tsx` use the approved quotes and public attributions supplied for this portfolio.
- The floating WhatsApp button is in `components/whatsapp-float.tsx`; its link uses the supplied Pakistan number in international format.
- Update the contact link in `app/page.tsx` with Ashar's email address. The current link opens a new email draft without a recipient.
- Review the title and description in `app/layout.tsx`, and add the production domain to the metadata once known.

## Deploy on Vercel

Import the Git repository into Vercel and use the default Next.js build settings. The app uses the Next.js App Router and does not require environment variables.
