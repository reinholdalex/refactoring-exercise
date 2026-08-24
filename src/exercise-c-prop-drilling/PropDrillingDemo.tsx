import { useState } from 'react';
import { Layout } from './Layout';
import type { User } from './types';

const currentUser: User = { id: 'u1', name: 'Alex Reinhold', role: 'Senior Frontend Engineer' };

// currentUser, theme, and toggleTheme are only actually *used* by UserBadge and
// ThemeToggle, three levels down — Layout, Sidebar, and Panel just forward them.
export function PropDrillingDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="form">
      <h2>Prop Drilling Demo</h2>
      <p className="muted">
        <code>currentUser</code> / <code>theme</code> / <code>toggleTheme</code> pass through{' '}
        <code>Layout</code> → <code>Sidebar</code> → <code>Panel</code> untouched before reaching{' '}
        <code>UserBadge</code> and <code>ThemeToggle</code>.
      </p>
      <div className={`app-shell ${theme}`}>
        <Layout currentUser={currentUser} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}
