import React from 'react';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Helper function to generate image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Query helper with error handling
export async function sanityFetch(query, params = {}) {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
}

// Simple hook for fetching data (no token needed)
export function useLiveQuery(query, params = {}, initialData = null) {
  const [data, setData] = React.useState(initialData);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await client.fetch(query, params);
        setData(result);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}