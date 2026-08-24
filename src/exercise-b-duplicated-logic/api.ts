import type { Project, Team, Ticket, User } from './types';

function delay<T>(value: T, ms = 400): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export function fetchUsers(): Promise<User[]> {
  return delay([
    { id: 'u1', name: 'Ada Lovelace', email: 'ada@example.com' },
    { id: 'u2', name: 'Grace Hopper', email: 'grace@example.com' },
  ]);
}

export function fetchProjects(): Promise<Project[]> {
  return delay([
    { id: 'p1', name: 'Refactor billing service', status: 'active' },
    { id: 'p2', name: 'Migrate forms to RHF', status: 'active' },
    { id: 'p3', name: 'Legacy admin panel', status: 'archived' },
  ]);
}

export function fetchTeams(): Promise<Team[]> {
  return delay([
    { id: 't1', name: 'Platform', memberCount: 6 },
    { id: 't2', name: 'Growth', memberCount: 4 },
  ]);
}

// Not wired into the dashboard yet — used for the "add a fourth resource"
// step once the duplication has been extracted into a generic hook.
export function fetchTickets(): Promise<Ticket[]> {
  return delay([
    { id: 'tk1', title: 'Fix flaky checkout test', priority: 'high' },
    { id: 'tk2', title: 'Update onboarding copy', priority: 'low' },
  ]);
}
