'use client';

import { useState, useEffect } from 'react';

interface ContentItem {
  _id: string;
  section: string;
  subsection?: string;
  key: string;
  value: string;
  type: string;
  order: number;
  isActive: boolean;
}

interface GroupedContent {
  [section: string]: any;
}

export function useContent() {
  const [content, setContent] = useState<GroupedContent>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/content');
        
        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }
        
        const data = await response.json();
        setContent(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching content:', err);
        // Don't set loading to false on error to allow fallback content
      } finally {
        setLoading(false);
      }
    };

    // Only fetch on client side
    if (typeof window !== 'undefined') {
      fetchContent();
    } else {
      setLoading(false);
    }
  }, []);

  const getContent = (section: string, subsection?: string, key?: string): any => {
    if (!content[section]) return undefined;
    
    if (subsection) {
      if (!content[section][subsection]) return undefined;
      
      if (key) {
        return content[section][subsection][key];
      }
      
      return content[section][subsection];
    }
    
    if (key) {
      return content[section][key];
    }
    
    return content[section];
  };

  const refreshContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/content');
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      
      const data = await response.json();
      setContent(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error refreshing content:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    content,
    loading,
    error,
    getContent,
    refreshContent
  };
}