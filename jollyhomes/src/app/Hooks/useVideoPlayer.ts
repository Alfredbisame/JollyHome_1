import { useState, useEffect, useCallback, RefObject } from 'react';
import { VideoPlayerState } from '@/app/components/VideoPlayer/types';

interface UseVideoPlayerOptions {
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export const useVideoPlayer = (
  videoRef: RefObject<HTMLVideoElement | null>,
  containerRef: RefObject<HTMLDivElement | null>,
  options: UseVideoPlayerOptions = {}
) => {
  const [state, setState] = useState<VideoPlayerState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isMuted: options.muted || false,
    isFullscreen: false,
    showControls: true,
    isLoading: true,
    playbackRate: 1,
    showSettings: false
  });

  // Format time helper
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (state.isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [state.isPlaying, videoRef]);

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      volume: newVolume, 
      isMuted: newVolume === 0 
    }));
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !state.isMuted;
      setState((prev: VideoPlayerState) => ({ 
        ...prev, 
        isMuted: newMuted 
      }));
      videoRef.current.muted = newMuted;
    }
  };

  // Handle progress change
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      currentTime: newTime 
    }));
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setState((prev: VideoPlayerState) => ({ 
        ...prev, 
        isFullscreen: true 
      }));
    } else {
      document.exitFullscreen();
      setState((prev: VideoPlayerState) => ({ 
        ...prev, 
        isFullscreen: false 
      }));
    }
  };

  // Handle playback rate change
  const handlePlaybackRateChange = (rate: number) => {
    setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      playbackRate: rate, 
      showSettings: false 
    }));
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  // Set show settings
  const setShowSettings = (show: boolean) => {
    setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      showSettings: show 
    }));
  };

  // Set show controls
  const setShowControls = (show: boolean) => {
    setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      showControls: show 
    }));
  };

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        duration: video.duration,
        isLoading: false
      }));
    };

    const handleTimeUpdate = () => {
      setState((prev: VideoPlayerState) => ({ 
        ...prev, 
        currentTime: video.currentTime 
      }));
    };

    const handlePlay = () => setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      isPlaying: true 
    }));
    
    const handlePause = () => setState((prev: VideoPlayerState) => ({ 
      ...prev, 
      isPlaying: false 
    }));

    const handleVolumeChangeEvent = () => {
      setState((prev: VideoPlayerState) => ({
        ...prev,
        volume: video.volume,
        isMuted: video.muted
      }));
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChangeEvent);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChangeEvent);
    };
  }, [videoRef]);

  // Auto-hide controls
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseMove = () => {
      setState((prev: VideoPlayerState) => ({ 
        ...prev, 
        showControls: true 
      }));
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (state.isPlaying) {
          setState((prev: VideoPlayerState) => ({ 
            ...prev, 
            showControls: false 
          }));
        }
      }, 3000);
    };

    const handleMouseLeave = () => {
      if (state.isPlaying) {
        setState((prev: VideoPlayerState) => ({ 
          ...prev, 
          showControls: false 
        }));
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timeout);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [state.isPlaying, containerRef]);

  return {
    ...state,
    setShowSettings,
    setShowControls,
    togglePlay,
    handleVolumeChange,
    toggleMute,
    handleProgressChange,
    toggleFullscreen,
    handlePlaybackRateChange,
    formatTime
  };
};