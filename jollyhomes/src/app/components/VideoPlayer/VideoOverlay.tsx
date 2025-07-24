import { motion, AnimatePresence } from 'framer-motion';
import  {PlayIcon } from './Icons';

interface VideoOverlayProps {
  isPlaying: boolean;
  isLoading: boolean;
  title?: string;
  onTogglePlay: () => void;
}

export const VideoOverlay: React.FC<VideoOverlayProps> = ({
  isPlaying,
  isLoading,
  title,
  onTogglePlay
}) => {
  return (
    <>
      {/* Play Button Overlay */}
      <AnimatePresence>
        {!isPlaying && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={onTogglePlay}
          >
            <motion.div
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <PlayIcon />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Overlay */}
      {title && (
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-white text-lg font-semibold drop-shadow-lg">
            {title}
          </h3>
        </div>
      )}
    </>
  );
};
