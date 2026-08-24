export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'active' | 'archived';
}

export interface Team {
  id: string;
  name: string;
  memberCount: number;
}

export interface Ticket {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
}
