"use client";

import { createContext, useReducer, useEffect, type ReactNode } from "react";
import type { CartItem } from "@/types/cart";

type Action =
  | { type: "LOAD"; items: CartItem[] }
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; productId: string; size: string }
  | { type: "INCREASE"; productId: string; size: string }
  | { type: "DECREASE"; productId: string; size: string }
  | { type: "CLEAR" };

function itemKey(productId: string, size: string) {
  return `${productId}::${size}`;
}

function reducer(items: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "LOAD":
      return action.items;

    case "ADD": {
      const k = itemKey(action.item.productId, action.item.size);
      const idx = items.findIndex((i) => itemKey(i.productId, i.size) === k);
      if (idx !== -1) {
        return items.map((item, index) =>
          index === idx
            ? { ...item, quantity: Math.min(item.quantity + action.item.quantity, item.stock) }
            : item
        );
      }
      return [...items, action.item];
    }

    case "REMOVE":
      return items.filter(
        (i) => itemKey(i.productId, i.size) !== itemKey(action.productId, action.size)
      );

    case "INCREASE":
      return items.map((i) =>
        itemKey(i.productId, i.size) === itemKey(action.productId, action.size)
          ? { ...i, quantity: Math.min(i.quantity + 1, i.stock) }
          : i
      );

    case "DECREASE":
      return items.map((i) =>
        itemKey(i.productId, i.size) === itemKey(action.productId, action.size)
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i
      );

    case "CLEAR":
      return [];
  }
}

export interface CartContextValue {
  items: CartItem[];
  itemsCount: number;
  total: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string) => void;
  increaseQuantity: (productId: string, size: string) => void;
  decreaseQuantity: (productId: string, size: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "pp-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "LOAD", items: JSON.parse(raw) as CartItem[] });
    } catch {
      // corrupted storage — start fresh
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const itemsCount = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        itemsCount,
        total,
        addToCart: (item) => dispatch({ type: "ADD", item }),
        removeFromCart: (productId, size) =>
          dispatch({ type: "REMOVE", productId, size }),
        increaseQuantity: (productId, size) =>
          dispatch({ type: "INCREASE", productId, size }),
        decreaseQuantity: (productId, size) =>
          dispatch({ type: "DECREASE", productId, size }),
        clearCart: () => dispatch({ type: "CLEAR" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
