import { MainContent } from './MainContent';
import { Sidebar } from './Sidebar';
import type { Theme, User } from './types';

interface LayoutProps {
  currentUser: User;
  theme: Theme;
  toggleTheme: () => void;
}

// Layout doesn't use any of these props either — it only forwards them to Sidebar.
export function Layout({ currentUser, theme, toggleTheme }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar currentUser={currentUser} theme={theme} toggleTheme={toggleTheme} />
      <MainContent />
    </div>
  );
}
