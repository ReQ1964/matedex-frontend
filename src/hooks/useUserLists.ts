import { useState, useEffect, useCallback } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { debounce } from 'next/dist/server/utils';

interface UserList {
  id: string;
  name: string;
  items: string[];
}

const API_ENDPOINT = '/api/user-lists';

export function useUserLists() {
  const [lists, setLists] = useState<UserList[]>([]);
  const queryClient = useQueryClient();

  // Fetch user lists with useQuery
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userLists'],
    queryFn: async () => {
      const response = await fetch(API_ENDPOINT);
      if (!response.ok) throw new Error('Failed to fetch lists');
      return response.json();
    },
  });

  // Update local state when server data is fetched
  useEffect(() => {
    if (data) {
      setLists(data);
      localStorage.setItem('userLists', JSON.stringify(data));
    }
  }, [data]);

  // Load lists from localStorage on initial mount
  useEffect(() => {
    const storedLists = localStorage.getItem('userLists');
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    }
  }, []);

  // Mutation for updating lists on the server
  const updateListsMutation = useMutation({
    mutationFn: async (newLists: UserList[]) => {
      const response = await fetch(API_ENDPOINT, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLists),
      });
      if (!response.ok) throw new Error('Failed to update lists');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries('userLists');
    },
  });

  // Debounced function to sync with server
  const debouncedSync = useCallback(
    debounce((newLists: UserList[]) => {
      updateListsMutation.mutate(newLists);
    }, 1000),
    []
  );

  // Function to update lists
  const updateLists = useCallback(
    (newLists: UserList[]) => {
      setLists(newLists);
      localStorage.setItem('userLists', JSON.stringify(newLists));
      debouncedSync(newLists);
    },
    [debouncedSync]
  );

  return {
    lists,
    updateLists,
    isLoading,
    isError,
    isSyncing: updateListsMutation.isLoading,
    syncError: updateListsMutation.isError,
  };
}
