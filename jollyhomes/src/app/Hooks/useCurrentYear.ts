'use client';

import { useState, useEffect } from 'react';

export const useCurrentYear = (): number => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    // Update the year when component mounts (handles SSR/hydration)
    setCurrentYear(new Date().getFullYear());
    
    // Optional: Set up an interval to update the year at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timeoutId = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
      
      // Set up daily interval after first update
      const intervalId = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 24 * 60 * 60 * 1000); // 24 hours
      
      return () => clearInterval(intervalId);
    }, msUntilMidnight);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return currentYear;
};
