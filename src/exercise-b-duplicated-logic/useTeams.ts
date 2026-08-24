import { useEffect, useState } from 'react';
import { fetchTeams } from './api';
import type { Team } from './types';

interface UseTeamsResult {
  data: Team[] | null;
  isLoading: boolean;
  error: string | null;
}

export function useTeams(): UseTeamsResult {
  const [data, setData] = useState<Team[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);
    fetchTeams()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Something went wrong');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, isLoading, error };
}
