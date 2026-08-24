import type { Theme } from './types';

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button type="button" onClick={onToggle}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
