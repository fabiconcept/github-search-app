"use client"
import { useState, useEffect } from 'react';
import { loadingState } from '../types';

type returnType<T> = [number, T[], loadingState];

export const useCustomFetch = <T>(reposUrl: string): returnType<T> => {
  const [resultCount, setResultCount] = useState<number>(0);
  const [result, setResult] = useState<T[]>([]);
  const [loading, setLoading] = useState<loadingState>("idle");

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchRepoCount = async () => {
      try {
        setLoading("pending");
        const response = await fetch(reposUrl, { signal });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
        setResultCount(data.length);
        setLoading("succeeded");
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.error("Request aborted")
        } else {
          console.error(err);
        }
        setLoading("failed");
      }
    };

    fetchRepoCount();

    // Cleanup function to abort the fetch on component unmount
    return () => abortController.abort();
  }, [reposUrl]);

  return [resultCount, result, loading ];
};
