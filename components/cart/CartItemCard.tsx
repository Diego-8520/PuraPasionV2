"use client";

import Image from "next/image";
import type { CartItem } from "@/types/cart";
import { formatPrice } from "@/utils/formatPrice";
import { useCart } from "@/hooks/useCart";
import CartQuantityControl from "./CartQuantityControl";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

interface Props {
  item: CartItem;
}

export default function CartItemCard({ item }: Props) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div
      className="flex gap-4 rounded-2xl p-4 transition-opacity duration-200"
      style={{ background: "#141414", border: "1px solid #1E1E1E" }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl"
        style={{ background: "#0E0E0E" }}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-2xl">
            👕
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-2 min-w-0">
        {/* Top row: name + delete */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            {item.team && (
              <span
                className="text-xs uppercase tracking-[2px] truncate"
                style={{ ...FB, color: "#606060" }}
              >
                {item.team}
              </span>
            )}
            <h3
              className="truncate leading-tight"
              style={{ ...FD, fontSize: "18px", letterSpacing: "1px", color: "#EFEFEF" }}
            >
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.productId, item.size)}
            aria-label={`Eliminar ${item.name} talla ${item.size}`}
            className="shrink-0 rounded-lg p-1.5 transition-colors"
            style={{ color: "#505050", background: "transparent", border: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#CC1111")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#505050")}
          >
            <TrashIcon />
          </button>
        </div>

        {/* Size + stock warning */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider"
            style={{
              ...FB,
              background: "#1E1E1E",
              color: "#A0A0A0",
              border: "1px solid #2E2E2E",
            }}
          >
            Talla {item.size}
          </span>
          {item.quantity >= item.stock && (
            <span className="text-xs" style={{ ...FB, color: "#CC1111" }}>
              Máximo disponible
            </span>
          )}
        </div>

        {/* Quantity + price row */}
        <div className="flex items-center justify-between gap-2 mt-auto">
          <CartQuantityControl
            quantity={item.quantity}
            stock={item.stock}
            onIncrease={() => increaseQuantity(item.productId, item.size)}
            onDecrease={() => decreaseQuantity(item.productId, item.size)}
          />
          <div className="text-right">
            <div
              className="leading-none"
              style={{ ...FD, fontSize: "20px", color: "#F5F5F5" }}
            >
              {formatPrice(item.price * item.quantity)}
            </div>
            {item.quantity > 1 && (
              <div className="mt-0.5 text-xs" style={{ ...FB, color: "#505050" }}>
                {formatPrice(item.price)} c/u
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}
