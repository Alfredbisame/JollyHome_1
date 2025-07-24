import { useEffect, RefObject } from 'react';

interface UseKeyboardShortcutsProps {
  containerRef: RefObject<HTMLDivElement | null>;
  togglePlay: () => void;
  toggleFullscreen: () => void;
  toggleMute: () => void;
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const useKeyboardShortcuts = ({
  containerRef,
  togglePlay,
  toggleFullscreen,
  toggleMute,
  videoRef
}: UseKeyboardShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlay();
          break;
        case 'KeyF':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'KeyM':
          e.preventDefault();
          toggleMute();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (videoRef.current) {
            videoRef.current.currentTime -= 10;
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (videoRef.current) {
            videoRef.current.currentTime += 10;
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, togglePlay, toggleFullscreen, toggleMute, videoRef]);
};
