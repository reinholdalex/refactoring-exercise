import { Panel } from './Panel';
import type { Theme, User } from './types';

interface SidebarProps {
  currentUser: User;
  theme: Theme;
  toggleTheme: () => void;
}

// Sidebar doesn't use any of these props — it only forwards them to Panel.
export function Sidebar({ currentUser, theme, toggleTheme }: SidebarProps) {
  return (
    <aside className="sidebar">
      <Panel currentUser={currentUser} theme={theme} toggleTheme={toggleTheme} />
    </aside>
  );
}
