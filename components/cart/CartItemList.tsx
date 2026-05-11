"use client";

import type { CartItem } from "@/types/cart";
import CartItemCard from "./CartItemCard";

interface Props {
  items: CartItem[];
}

export default function CartItemList({ items }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <CartItemCard key={`${item.productId}-${item.size}`} item={item} />
      ))}
    </div>
  );
}
