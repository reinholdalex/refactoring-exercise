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
