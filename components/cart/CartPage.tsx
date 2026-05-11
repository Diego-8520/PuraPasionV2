"use client";

import { useCart } from "@/hooks/useCart";
import CartEmptyState from "./CartEmptyState";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import CartWhatsAppButton from "./CartWhatsAppButton";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

export default function CartPage() {
  const { items, itemsCount, total, clearCart } = useCart();

  return (
    <main
      className="min-h-screen pb-32 pt-10 md:pb-20"
      style={{ background: "#0A0A0A" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Page header */}
        <div className="mb-8 flex items-baseline gap-4">
          <h1
            className="leading-none tracking-[2px]"
            style={{
              ...FD,
              fontSize: "clamp(40px,6vw,64px)",
              color: "#F5F5F5",
            }}
          >
            Carrito
          </h1>
          {itemsCount > 0 && (
            <span className="text-sm" style={{ ...FB, color: "#A0A0A0" }}>
              {itemsCount} {itemsCount === 1 ? "producto" : "productos"}
            </span>
          )}
        </div>

        {items.length === 0 ? (
          <CartEmptyState />
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left: product list */}
            <CartItemList items={items} />

            {/* Right: order summary (sticky on desktop) */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <CartSummary
                items={items}
                total={total}
                itemsCount={itemsCount}
                onClear={clearCart}
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile sticky CTA — only when cart has items */}
      {items.length > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden"
          style={{
            background: "rgba(10,10,10,0.97)",
            borderTop: "1px solid #1E1E1E",
            backdropFilter: "blur(12px)",
          }}
        >
          <CartWhatsAppButton items={items} />
        </div>
      )}
    </main>
  );
}
