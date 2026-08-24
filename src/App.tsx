import { useState } from 'react';
import { TeamOnboardingForm as FormikForm } from './exercise-a-formik/TeamOnboardingForm';
import { ResourceDashboard } from './exercise-b-duplicated-logic/ResourceDashboard';
import { PropDrillingDemo } from './exercise-c-prop-drilling/PropDrillingDemo';

type Exercise = 'a' | 'b' | 'c';

const TABS: Array<{ key: Exercise; label: string }> = [
  { key: 'a', label: 'A — Migrate to React Hook Form' },
  { key: 'b', label: 'B — Duplicated logic' },
  { key: 'c', label: 'C — Prop drilling' },
];

export default function App() {
  const [exercise, setExercise] = useState<Exercise>('a');

  return (
    <div className="app">
      <nav className="tabs">
        {TABS.map((tab) => (
          <button key={tab.key} className={exercise === tab.key ? 'active' : ''} onClick={() => setExercise(tab.key)}>
            {tab.label}
          </button>
        ))}
      </nav>
      {exercise === 'a' && <FormikForm />}
      {exercise === 'b' && <ResourceDashboard />}
      {exercise === 'c' && <PropDrillingDemo />}
    </div>
  );
}
