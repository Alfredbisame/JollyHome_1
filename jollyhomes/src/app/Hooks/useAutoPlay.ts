import { useEffect } from 'react';

interface UseAutoPlayProps {
  isPlaying: boolean;
  totalSlides: number;
  onNext: () => void;
  interval?: number;
}

export const useAutoPlay = ({ 
  isPlaying, 
  onNext, 
  interval = 5000 
}: UseAutoPlayProps) => {
  useEffect(() => {
    if (!isPlaying) return;
    
    const autoPlayInterval = setInterval(() => {
      onNext();
    }, interval);

    return () => clearInterval(autoPlayInterval);
  }, [isPlaying, onNext, interval]);
};
