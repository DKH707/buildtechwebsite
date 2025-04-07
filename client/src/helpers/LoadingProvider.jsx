// LoadingProvider.jsx
import React, { useState, useEffect } from 'react';
import { LoadingContext } from './LoadingContext.jsx';

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Auto turn off loading after 10 seconds if stuck in a loading loop
  useEffect(() => {
    const timer= setTimeout(()=>{if(isLoading){console.log('Loading too long...')}}, 5000)
    const timer2 = setTimeout(() => {
      if(isLoading){console.log("Auto-switching loading to false");setIsLoading(false)};
    }, 10000);
    return () => {clearTimeout(timer);clearTimeout(timer2)};
  }, [isLoading]);
  
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}