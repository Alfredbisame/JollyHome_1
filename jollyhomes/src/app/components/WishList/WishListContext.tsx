"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type WishListItem = {
  id: string;
  title: string;
  image: string;
  price?: number;
  // Add more fields as needed
};

interface WishListContextType {
  items: WishListItem[];
  addItem: (item: WishListItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  count: number;
}

const WishListContext = createContext<WishListContextType | undefined>(undefined);

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) throw new Error("useWishList must be used within a WishListProvider");
  return context;
};

export const WishListProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishListItem[]>([]);

  const addItem = (item: WishListItem) => {
    setItems((prev) => (prev.find((i) => i.id === item.id) ? prev : [...prev, item]));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clear = () => setItems([]);

  return (
    <WishListContext.Provider value={{ items, addItem, removeItem, clear, count: items.length }}>
      {children}
    </WishListContext.Provider>
  );
}; 