# Frontend Refactoring Interview Exercise

A ready-to-use hands-on exercise for a senior frontend interview's "refactoring" segment,
built around a Formik → React Hook Form migration — the same migration your own codebase
is currently doing.

## Setup (before the interview)

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. You'll see two tabs:

- **Exercise A — Migrate a slice** (Formik): candidate ports specific pieces of a working
  Formik form to React Hook Form.
- **Exercise B — Find the bug** (React Hook Form): candidate debugs a mostly-finished
  migration that has three seeded bugs.

## What the form does

Both versions implement the same "Team Onboarding" form:

- plain text fields (name, email)
- a role select
- a "contractor" checkbox that conditionally requires an end date, plus a
  start/end date ordering check (cross-field validation)
- a dynamic list of teammates (add/remove), each validated individually, plus a
  cross-item "emails must be unique" rule

That mix — plain fields, a dependent field, cross-field validation, and an array field —
covers the parts of a Formik → React Hook Form migration that actually trip people up,
so it should transfer directly to conversation about your real migration.
