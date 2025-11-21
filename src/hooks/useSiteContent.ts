import { useState, useEffect } from 'react';
import { getSiteContent } from '@/services/contentService';
import { SiteContent } from '@/types/content';

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getSiteContent();
        setContent(data);
      } catch (error) {
        console.error('Error loading site content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading };
};
