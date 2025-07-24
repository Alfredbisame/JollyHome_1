"use client";

import { useWishList } from "./WishListContext";
import { useRouter } from "next/navigation";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const WishListButton = () => {
  const { count, items } = useWishList();
  const router = useRouter();

  // Debug: Log the count to console
  console.log('WishListButton - Count:', count, 'Items:', items);

  return (
    <motion.button
      className="relative flex items-center space-x-2 cursor-pointer select-none group transition-all duration-200 hover:bg-white/10 px-3 py-2 rounded-md focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => router.push("/wishlist")}
      aria-label="View wishlist"
    >
      <span className="relative">
        <HeartIcon className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-200 drop-shadow-lg" />
        <AnimatePresence>
          {count > 0 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg border-2 border-white"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="font-medium group-hover:text-gray-100 transition-colors duration-200">
        Wishlist{count > 0 ? ` (${count})` : ""}
      </span>
    </motion.button>
  );
};

export default WishListButton; 