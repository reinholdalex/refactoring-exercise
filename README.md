# Frontend Refactoring Interview Exercise

A ready-to-use hands-on exercise for a senior frontend interview's "refactoring" segment.
Three independent exercises, each isolating a different refactoring skill.

## Setup (before the interview)

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. You'll see three tabs:

- **Exercise A — Migrate to React Hook Form** (`src/exercise-a-formik/`): candidate
  migrates a working Formik form to React Hook Form — the same migration your own
  codebase is doing.
- **Exercise B — Duplicated logic** (`src/exercise-b-duplicated-logic/`): three
  copy-pasted data-fetching hooks; candidate extracts a generic hook and proves it
  generalizes.
- **Exercise C — Prop drilling** (`src/exercise-c-prop-drilling/`): props threaded
  through pass-through components; candidate removes the drilling with context or
  composition.

**Pick one exercise per interview.** Running more than one plus discussion doesn't fit in
30 minutes. See `INTERVIEWER_GUIDE.md` for which one to pick and how to run the session,
and `ANSWER_KEY.md` for the expected refactors/approaches.

Don't open `ANSWER_KEY.md` in front of the candidate — share your screen from the code
editor, not the file tree.

## What each exercise covers

**A — Team Onboarding form.** A working Formik form: plain text fields, a role select, a
"contractor" checkbox that conditionally requires an end date plus a start/end date
ordering check, and a dynamic list of teammates with per-item and cross-item ("emails
must be unique") validation. That mix covers the parts of a Formik → React Hook Form
migration that actually trip people up.

**B — Resource Dashboard.** `useUsers`, `useProjects`, and `useTeams` are near-identical
hooks — same loading/error/cancellation logic, different fetch function and type. The
ask: extract one generic `useResource<T>` hook, then add a fourth resource
(`fetchTickets`, already mocked in `api.ts`) using it to prove it generalizes.

**C — Prop Drilling Demo.** `currentUser`, `theme`, and `toggleTheme` are threaded
through `Layout` → `Sidebar` → `Panel`, none of which use them, before reaching
`UserBadge` and `ThemeToggle`. The ask: remove the drilling with Context or composition,
and be able to justify the choice.
