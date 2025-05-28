# 🤖 Copilot Instructions – What2Wear App

This project is a **React + Node.js** web app to help users plan what to wear to events. It allows users to view, create, and join events, and post images or links of their outfits.

## 🧱 Project Structure

The codebase is organized into three root-level folders:

/client – React frontend (Vite + Tailwind)
/backend – Node.js backend (Express)
/database – Prisma schema and migration files



---

## 🗃 Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL via Prisma
- **Auth**: Firebase Auth SDK
- **Storage**: Firebase Storage (or AWS S3)
- **Image Preview**: Extract `og:image` from outfit URLs

---

## 🔐 Auth Rules

- Firebase handles user auth (Google or Email).
- Authenticated users can create events and post outfits.
- Public events are viewable by all; private events require invite link.

---

## 📦 Folder Responsibilities

### `/client`
- React app with Tailwind for UI
- Firebase Auth integration
- Pages:
  - `/` → Feed of events
  - `/event/:id` → View specific event and outfits
  - `/create` → Create new event
  - `/event/:id/add-outfit` → Post an outfit

### `/backend`
- Express server
- Routes for:
  - `/events` → GET/POST
  - `/events/:id` → GET/PATCH
  - `/events/:id/outfits` → GET/POST
  - `/outfits/:id` → DELETE
- Image preview fetcher for links (scrape Open Graph metadata)

### `/database`
- `schema.prisma`: Defines User, Event, Outfit models
- Prisma migrations
- Connects to PostgreSQL

---

## ⚛️ React Code Quality Guidelines

> Follow these principles when writing React code:

### ✅ Component Structure
- Prefer **small, reusable components** over large ones.
- Split complex UIs into atomic parts (e.g., `EventCard`, `OutfitGrid`, `OutfitUploader`).
- Organize components in `/client/src/components`.

### 🧠 State Management
- Use `useState` and `useEffect` appropriately.
- Co-locate state where it is used, unless it must be shared.
- Use context providers only when global state is required (e.g., auth context).

### 📂 Project Organization
/client/src
/components // Reusable UI elements
/pages // Route-level views
/hooks // Custom hooks (e.g., useAuth)
/firebase // Firebase init + config
/utils // Shared utilities (e.g., image scrapers)


### 🎨 Styling
- Use Tailwind utility classes
- Avoid inline styles unless necessary
- Follow mobile-first and responsive best practices

### 🧪 Testing & Best Practices
- Avoid putting logic inside JSX; pull it out into variables or helper functions
- Add loading/error states where appropriate
- Use `key` prop when rendering lists
- Prefer `map` for dynamic lists over hardcoded UI

---

## 🧵 Naming Conventions

- Event URLs: `/event/:eventId`
- API routes: RESTful, plural nouns (`/events`, `/outfits`)
- DB IDs: UUIDs
- File naming: kebab-case or camelCase
- React components in PascalCase

---

## 🧠 Tips for Copilot Prompts

- Follow the 3-folder structure when suggesting new code
- Use Prisma syntax for models
- Assume Firebase is initialized in `client/src/firebase.ts`
- Tailwind is preferred for all styling
- Use standard REST methods for backend routes
- Extract preview image from linked outfits using `og:image` or `<img>` fallback
- Always suggest reusable components and clean separation of logic and presentation

---

## ✅ MVP Scope Recap

- Auth with Firebase
- View + create public/private events
- Upload or link outfit image
- Browse outfits by event

Do not include non-MVP features unless requested (e.g. likes, comments, voting, RSVP).
