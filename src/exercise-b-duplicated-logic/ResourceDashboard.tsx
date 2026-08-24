import { useProjects } from './useProjects';
import { useTeams } from './useTeams';
import { useUsers } from './useUsers';

interface ResourceListProps<T extends { id: string }> {
  title: string;
  isLoading: boolean;
  error: string | null;
  data: T[] | null;
  renderItem: (item: T) => string;
}

// Constraining T to { id: string } lets the list key itself, instead of every
// caller having to pass down a redundant `getKey`.
function ResourceList<T extends { id: string }>({ title, isLoading, error, data, renderItem }: ResourceListProps<T>) {
  return (
    <div className="resource-column">
      <h3>{title}</h3>
      {isLoading && <p className="muted">Loading…</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{renderItem(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ResourceDashboard() {
  const users = useUsers();
  const projects = useProjects();
  const teams = useTeams();

  return (
    <div className="form">
      <h2>Resource Dashboard</h2>
      <p className="muted">
        <code>useUsers</code>, <code>useProjects</code>, and <code>useTeams</code> are copy-pasted —
        same loading/error/cancellation logic, different fetch function and type.
      </p>
      <div className="dashboard">
        <ResourceList title="Users" {...users} renderItem={(u) => `${u.name} (${u.email})`} />
        <ResourceList title="Projects" {...projects} renderItem={(p) => `${p.name} — ${p.status}`} />
        <ResourceList title="Teams" {...teams} renderItem={(t) => `${t.name} (${t.memberCount} members)`} />
      </div>
    </div>
  );
}
