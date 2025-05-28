# 👗 What2Wear – Event Outfit Planning App

Plan your outfits for public or private events by seeing what others are wearing. Avoid clashes, get the vibe, and dress right.

---

## 🧱 Project Structure

The project should be organized into three root-level folders:

/client – React frontend
/backend – Node.js + Express backend
/database – Prisma schema and migration files

---

## ✅ MVP Task Checklist

### 🔐 Authentication (Firebase)
- [ ] Set up Firebase Auth SDK
- [ ] Enable Google and Email login
- [ ] Add protected routes for authenticated users

---

### 🗓 Event Management
- [ ] Build Event model in Prisma
- [ ] `GET /events`: List public events
- [ ] `GET /events/:id`: Event details (title, date, outfits, etc.)
- [ ] `POST /events`: Create new event
- [ ] Add `isPrivate` boolean toggle
- [ ] `POST /events/:id/invite`: Generate shareable invite link
- [ ] `PATCH /events/:id`: Edit event (owner only)
- [ ] UI: Create event form
- [ ] UI: Event list and detail page

---

### 🧥 Outfit Posting
- [ ] Build Outfit and OutfitItem models in Prisma
- [ ] Support multiple items per outfit (tops, bottoms, shoes, etc.)
- [ ] `POST /events/:id/outfits`: Create outfit with multiple items
- [ ] `POST /outfits/:id/items`: Add items to existing outfit
- [ ] `DELETE /outfits/:id/items/:itemId`: Remove specific item
- [ ] `DELETE /outfits/:id`: Delete entire outfit
- [ ] UI: Multi-item upload form with:
  - [ ] Category selection (top, bottom, shoes, accessories)
  - [ ] Image upload or URL input for each item
  - [ ] Item description field
  - [ ] Overall outfit caption
- [ ] UI: Display outfits grid with:
  - [ ] Preview of main item
  - [ ] Expandable view for all items
  - [ ] Category labels and descriptions
  - [ ] Shopping links when available
  - [ ] User attribution and timestamp

---

### 🖼 Image Handling
- [ ] Upload image to Firebase Storage (or S3)
- [ ] If URL is provided:
  - [ ] Fetch `og:image` or main image on backend
  - [ ] Store link and extracted image URL
- [ ] Display fallback if image cannot be extracted

---

### 🧱 Backend Setup
- [ ] Scaffold Node.js + Express app in `/backend`
- [ ] Connect Prisma to PostgreSQL
- [ ] Create routes for:
  - [ ] Authenticated user context
  - [ ] Event CRUD
  - [ ] Outfit CRUD
- [ ] Deploy backend to Railway or Render

---

### 💻 Frontend Setup
- [x] Scaffold React app in `/client` using Vite or CRA
- [ ] Integrate Firebase Auth
- [x] Tailwind CSS for UI
- [ ] Pages:
  - [x] Home / event feed
  - [x] Create event
  - [x] Event detail (with outfits)
  - [x] Add outfit

---

## 🧠 Future Features (Post-MVP)
- [ ] Outfit comments and likes
- [ ] RSVP & guest list
- [ ] Outfit approval voting
- [ ] AI image tagging or style suggestions

---

## 🗃 Prisma Schema (in `/database/prisma/schema.prisma`)

```ts
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  outfits   Outfit[]
  events    Event[] @relation("CreatedEvents")
}

model Event {
  id         String   @id @default(uuid())
  title      String
  date       DateTime
  location   String?
  isPrivate  Boolean  @default(false)
  createdBy  User     @relation("CreatedEvents", fields: [createdById], references: [id])
  createdById String
  outfits    Outfit[]
}

model Outfit {
  id        String       @id @default(uuid())
  caption   String?
  event     Event        @relation(fields: [eventId], references: [id])
  eventId   String
  user      User         @relation(fields: [userId], references: [id])
  userId    String
  createdAt DateTime     @default(now())
  items     OutfitItem[]
}

model OutfitItem {
  id          String   @id @default(uuid())
  imageUrl    String
  linkUrl     String?
  description String?
  category    String   // "top", "bottom", "shoes", "accessories", etc.
  outfit      Outfit   @relation(fields: [outfitId], references: [id])
  outfitId    String
  createdAt   DateTime @default(now())
}

📦 Stack Summary
Frontend: React, Tailwind CSS

Backend: Node.js + Express

Database: PostgreSQL + Prisma

Auth: Firebase Auth

Storage: Firebase Storage or AWS S3

Deploy: Netlify (frontend), Railway (backend)

✨ Goal
Ship a working MVP where users can:

Create or join events (public/private)

Upload or link outfits

View what others are wearing
