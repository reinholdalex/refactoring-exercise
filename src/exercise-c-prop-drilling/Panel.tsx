import { ThemeToggle } from './ThemeToggle';
import type { Theme, User } from './types';
import { UserBadge } from './UserBadge';

interface PanelProps {
  currentUser: User;
  theme: Theme;
  toggleTheme: () => void;
}

// The only component in this tree that actually uses currentUser/theme/toggleTheme.
export function Panel({ currentUser, theme, toggleTheme }: PanelProps) {
  return (
    <div className="panel">
      <UserBadge user={currentUser} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
}
