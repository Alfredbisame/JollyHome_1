"use client";

import { useWishList } from "./WishListContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface AddToWishListButtonProps {
  item: {
    id: string;
    title: string;
    image: string;
    price?: number;
  };
}

const AddToWishListButton = ({ item }: AddToWishListButtonProps) => {
  const { addItem, items } = useWishList();
  const isInWishlist = items.some((wishlistItem) => wishlistItem.id === item.id);

  const handleAddToWishlist = () => {
    addItem(item);
  };

  return (
    <motion.button
      onClick={handleAddToWishlist}
      className={`p-2 rounded-full transition-all duration-200 ${
        isInWishlist
          ? "bg-pink-100 text-green-600"
          : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-green-600"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <HeartIcon className="w-5 h-5" />
    </motion.button>
  );
};

export default AddToWishListButton; 