"use client";

import type { CartItem } from "@/types/cart";
import { formatPrice } from "@/utils/formatPrice";
import CartWhatsAppButton from "./CartWhatsAppButton";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

interface Props {
  items: CartItem[];
  total: number;
  itemsCount: number;
  onClear: () => void;
}

export default function CartSummary({ items, total, itemsCount, onClear }: Props) {
  return (
    <div
      className="flex flex-col gap-4 rounded-2xl p-5"
      style={{ background: "#141414", border: "1px solid #1E1E1E" }}
    >
      <h2
        className="leading-none tracking-[1px]"
        style={{ ...FD, fontSize: "24px", color: "#F5F5F5" }}
      >
        Resumen del pedido
      </h2>

      {/* Line items */}
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between text-sm" style={FB}>
          <span style={{ color: "#A0A0A0" }}>Productos</span>
          <span style={{ color: "#F5F5F5" }}>
            {itemsCount} {itemsCount === 1 ? "unidad" : "unidades"}
          </span>
        </div>
        <div className="flex justify-between text-sm" style={FB}>
          <span style={{ color: "#A0A0A0" }}>Subtotal</span>
          <span style={{ color: "#F5F5F5" }}>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-sm" style={FB}>
          <span style={{ color: "#505050" }}>Envío</span>
          <span style={{ color: "#505050" }}>Se confirma por WhatsApp</span>
        </div>
      </div>

      <div className="h-px" style={{ background: "#2E2E2E" }} />

      {/* Total */}
      <div className="flex items-baseline justify-between">
        <span className="text-sm" style={{ ...FB, color: "#A0A0A0" }}>
          Total estimado
        </span>
        <span
          className="leading-none"
          style={{ ...FD, fontSize: "30px", color: "#F5F5F5" }}
        >
          {formatPrice(total)}
        </span>
      </div>

      {/* WA button — visible only on desktop (mobile uses fixed bottom bar) */}
      <div className="hidden md:block">
        <CartWhatsAppButton items={items} />
      </div>

      <p
        className="text-center text-xs"
        style={{ ...FB, color: "#505050", lineHeight: 1.5 }}
      >
        El valor final del envío se confirma por WhatsApp.
        <br />
        No se realiza ningún pago en línea.
      </p>

      {/* Clear cart */}
      {items.length > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="text-xs transition-colors"
          style={{
            ...FB,
            color: "#505050",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#CC1111")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#505050")}
        >
          Vaciar carrito
        </button>
      )}
    </div>
  );
}
