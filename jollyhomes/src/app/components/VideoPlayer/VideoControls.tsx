import { motion, AnimatePresence } from 'framer-motion';
import { VideoControlsProps } from './types';
import { formatTime } from '@/app/utils/timeUtils';
import {
  PlayIcon,
  PauseIcon,
  VolumeIcon,
  MuteIcon,
  FullscreenIcon,
  SettingsIcon
} from './Icons';
import styles from './VideoPlayer.module.css';

export const VideoControls: React.FC<VideoControlsProps> = ({
  showControls,
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  playbackRate,
  showSettings,
  onTogglePlay,
  onVolumeChange,
  onToggleMute,
  onProgressChange,
  onToggleFullscreen,
  onPlaybackRateChange,
  onToggleSettings
}) => {
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AnimatePresence>
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4"
        >
          {/* Progress Bar */}
          <div className="mb-4 group">
            <div className="relative">
              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={onProgressChange}
                className={`w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer ${styles.slider} ${styles.progressSlider}`}
              />
              {/* Progress fill */}
              <div 
                className="absolute top-0 left-0 h-1 bg-blue-500 rounded-lg pointer-events-none transition-all duration-100"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4">
              {/* Play/Pause Button */}
              <motion.button
                onClick={onTogglePlay}
                className="p-2 bg-green-500 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </motion.button>

              {/* Volume Control */}
              <div className="flex items-center space-x-2 group">
                <motion.button
                  onClick={onToggleMute}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? <MuteIcon /> : <VolumeIcon />}
                </motion.button>
                <div className="relative">
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={isMuted ? 0 : volume}
                    onChange={onVolumeChange}
                    className={`h-1 bg-white/30 rounded-lg appearance-none cursor-pointer transition-all duration-200 ${styles.slider} ${styles.volumeSlider} opacity-0 group-hover:opacity-100 w-0 group-hover:w-20`}
                  />
                </div>
              </div>

              {/* Time Display */}
              <div className="text-sm font-mono tabular-nums">
                <span className="text-white">{formatTime(currentTime)}</span>
                <span className="text-white/60 mx-1">/</span>
                <span className="text-white/80">{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* Settings */}
              <div className="relative">
                <motion.button
                  onClick={onToggleSettings}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SettingsIcon />
                </motion.button>

                {/* Settings Menu */}
                <AnimatePresence>
                  {showSettings && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full right-0 mb-2 bg-black/95 backdrop-blur-sm rounded-lg p-3 min-w-[140px] border border-white/10"
                    >
                      <div className="text-xs text-white/70 mb-3 font-semibold uppercase tracking-wide">
                        Playback Speed
                      </div>
                      <div className="space-y-1">
                        {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                          <motion.button
                            key={rate}
                            onClick={() => onPlaybackRateChange(rate)}
                            className={`block w-full text-left px-3 py-2 rounded text-sm transition-all duration-150 ${
                              playbackRate === rate 
                                ? 'text-blue-400 bg-blue-400/20' 
                                : 'text-white hover:bg-white/10'
                            }`}
                            whileHover={{ x: 2 }}
                          >
                            {rate === 1 ? 'Normal' : `${rate}x`}
                            {playbackRate === rate && (
                              <motion.div
                                className="w-1 h-1 bg-blue-400 rounded-full ml-auto"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fullscreen Button */}
              <motion.button
                onClick={onToggleFullscreen}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FullscreenIcon />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
