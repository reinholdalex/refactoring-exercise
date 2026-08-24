import type { User } from './types';

export function UserBadge({ user }: { user: User }) {
  return (
    <div className="user-badge">
      <strong>{user.name}</strong>
      <span className="muted">{user.role}</span>
    </div>
  );
}
