'use client';

import { useRef } from 'react';
import { VideoControls } from './VideoControls';
import { VideoOverlay } from './VideoOverlay';
import { LoadingSpinner } from './LoadingSpinner';
import { useVideoPlayer } from '@/app/Hooks/useVideoPlayer';
import { useKeyboardShortcuts } from '@/app/Hooks/useKeyboardShortcuts';
import { VideoPlayerProps } from './types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  width = '100%',
  height = '70vh'
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    // isFullscreen,
    showControls,
    isLoading,
    playbackRate,
    showSettings,
    setShowSettings,
    togglePlay,
    handleVolumeChange,
    toggleMute,
    handleProgressChange,
    toggleFullscreen,
    handlePlaybackRateChange,
    // setShowControls
  } = useVideoPlayer(videoRef, containerRef, { autoPlay, muted, loop });

  useKeyboardShortcuts({
    containerRef,
    togglePlay,
    toggleFullscreen,
    toggleMute,
    videoRef
  });

  return (
    <div 
      ref={containerRef}
      className={`relative bg-black rounded-lg overflow-hidden shadow-2xl ${className}`}
      style={{ width, height }}
      tabIndex={0}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        className="w-full h-full object-cover"
        onClick={togglePlay}
      />

      {/* Loading Spinner */}
      <LoadingSpinner isLoading={isLoading} />

      {/* Video Overlays */}
      <VideoOverlay
        isPlaying={isPlaying}
        isLoading={isLoading}
        title={title}
        onTogglePlay={togglePlay}
      />

      {/* Controls */}
      {controls && (
        <VideoControls
          showControls={showControls}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          isMuted={isMuted}
          playbackRate={playbackRate}
          showSettings={showSettings}
          onTogglePlay={togglePlay}
          onVolumeChange={handleVolumeChange}
          onToggleMute={toggleMute}
          onProgressChange={handleProgressChange}
          onToggleFullscreen={toggleFullscreen}
          onPlaybackRateChange={handlePlaybackRateChange}
          onToggleSettings={() => setShowSettings(!showSettings)}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
