'use client';

import { useWishList } from '@/app/components/WishList/WishListContext';
import { Card } from '@/app/components/ui/Card';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WishListPage() {
  const { items, removeItem, clear } = useWishList();

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8"
        >
          Your Wishlist
        </motion.h1>
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 py-24"
          >
            <p className="text-lg">Your wishlist is empty. Start adding your favorite homes!</p>
          </motion.div>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                onClick={clear}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow hover:from-green-600 hover:to-blue-600 transition"
              >
                Clear All
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <Card key={item.id} className="flex flex-col md:flex-row items-center p-4 bg-white/90 shadow-xl rounded-2xl border border-pink-100">
                  <div className="w-32 h-32 relative mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl border border-pink-200"
                    />
                  </div>
                  <div className="flex-1 w-full">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">{item.title}</h2>
                    {item.price && <div className="text-green-500 font-bold mb-2">GHS {item.price}</div>}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 bg-pink-100 text-pink-700 px-3 py-1 rounded hover:bg-pink-200 transition"
                    >
                      Remove
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
} 