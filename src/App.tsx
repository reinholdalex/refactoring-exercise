import { useState } from 'react';
import { TeamOnboardingForm as FormikForm } from './exercise-a-formik/TeamOnboardingForm';
import { TeamOnboardingForm as RHFForm } from './exercise-b-rhf-buggy/TeamOnboardingForm';

type Exercise = 'a' | 'b';

export default function App() {
  const [exercise, setExercise] = useState<Exercise>('a');

  return (
    <div className="app">
      <nav className="tabs">
        <button className={exercise === 'a' ? 'active' : ''} onClick={() => setExercise('a')}>
          Exercise A — Migrate a slice (Formik)
        </button>
        <button className={exercise === 'b' ? 'active' : ''} onClick={() => setExercise('b')}>
          Exercise B — Find the bug (React Hook Form)
        </button>
      </nav>
      {exercise === 'a' ? <FormikForm /> : <RHFForm />}
    </div>
  );
}
