'use client';

import useSWR from 'swr';
import type { ContentJSON } from '@/lib/content.types';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch content');
  }
  return res.json();
};

export function useContent(initialData?: any) {
  const { data, error, isLoading, mutate } = useSWR<ContentJSON>(
    '/api',
    fetcher,
    {
      fallbackData: initialData,
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000,
    }
  );

  return {
    content: data,
    isLoading,
    isError: error,
    mutate,
  };
}

export function useGlobals(initialData?: any) {
  const { content, isLoading, isError } = useContent(initialData);
  return {
    globals: content?.globals,
    isLoading,
    isError,
  };
}

export function useProjects(initialData?: any) {
  const { content, isLoading, isError } = useContent(initialData);
  const allProjectsSection = content?.sections?.['all-projects'];
  const projects = allProjectsSection?.components?.[0]?.variables?.projects || [];
  
  return {
    projects,
    isLoading,
    isError,
  };
}
