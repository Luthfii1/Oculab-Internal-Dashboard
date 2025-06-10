# Oculab Internal Dashboard

A modern internal dashboard for Oculab, built with Next.js, React, Tailwind CSS, shadcn/ui, and Zod. This dashboard provides management and CRUD features for health facilities (Fasyankes) and users, with a focus on usability, validation, and a beautiful UI.

## Features
- Responsive dashboard layout with sidebar, header, and main content
- Fasyankes (health facility) management: add, edit, delete, view details
- User management (coming soon)
- Data table with search, pagination, and auto-increment row numbers
- Form validation with Zod and react-hook-form
- Custom toast notifications for success/error/info
- Confirmation popups for critical actions
- Loading indicators and error handling

## Tech Stack
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zod](https://zod.dev/) (validation)
- [react-hook-form](https://react-hook-form.com/)
- [Lucide React](https://lucide.dev/)
- [@tanstack/react-table](https://tanstack.com/table/v8)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-org/oculab-internal-dashboard.git
cd oculab-internal-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
For staging/production, use `.env.staging` or `.env.production` and set `NEXT_PUBLIC_BASE_URL` accordingly.

### 4. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
  api/                # API utilities and dummy data
  components/         # React components (shared, fasyankes, ui, etc)
  schemas/            # Zod schemas and enums
  app/                # Next.js app directory
  utils/              # Utility functions (apiUtils, etc)
```

## Development Tips
- Use the search bar in tables to quickly filter data.
- All forms use Zod for validation; error messages will appear inline.
- Toast notifications appear in the top-right for feedback.
- Confirmation popups prevent accidental destructive actions.
- Loading indicators are shown during async operations.

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## License
MIT

---

**Oculab Internal Dashboard** — Built with ❤️ by the Oculab team.
