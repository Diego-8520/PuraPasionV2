"use client";

import { useState } from "react";
import type { Producto } from "@/types/product";
import { getStockTotal, getImagenPrincipal } from "@/services/productos";
import { createWhatsAppProductMessage } from "@/utils/whatsapp";
import { useCart } from "@/hooks/useCart";

const FB = { fontFamily: "var(--font-barlow), sans-serif" };

interface Props {
  producto: Producto;
  selectedSize: string | null;
  onSizeRequired: () => void;
}

export default function ProductActions({
  producto,
  selectedSize,
  onSizeRequired,
}: Props) {
  const agotado = getStockTotal(producto) === 0;
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleWhatsApp() {
    if (!selectedSize) {
      onSizeRequired();
      return;
    }
    const url = createWhatsAppProductMessage(producto.nombre, selectedSize);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function handleAddToCart() {
    if (!selectedSize) {
      onSizeRequired();
      return;
    }
    const tallaData = producto.tallas_stock.find((t) => t.talla === selectedSize);
    if (!tallaData) return;

    addToCart({
      productId: producto.id,
      name: producto.nombre,
      team: producto.equipos?.nombre,
      image: getImagenPrincipal(producto) ?? "",
      size: selectedSize,
      quantity: 1,
      price: tallaData.precio,
      stock: tallaData.cantidad,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Primary — WhatsApp */}
      <button
        type="button"
        onClick={handleWhatsApp}
        disabled={agotado}
        aria-label="Comprar por WhatsApp"
        className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed"
        style={{
          ...FB,
          fontSize: 14,
          background: agotado ? "#1A1A1A" : "#25D366",
          color: agotado ? "#404040" : "#fff",
          border: agotado ? "1px solid #1A1A1A" : "none",
          boxShadow: agotado ? "none" : "0 8px 24px rgba(37,211,102,0.28)",
        }}
      >
        {!agotado && <WAIcon />}
        {agotado ? "Producto agotado" : "Comprar por WhatsApp"}
      </button>

      {/* Secondary — Add to cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={agotado}
        aria-label="Agregar al carrito"
        className="flex min-h-[52px] w-full items-center justify-center rounded-xl border font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed"
        style={{
          ...FB,
          fontSize: 14,
          background: added ? "#CC1111" : "transparent",
          color: agotado ? "#404040" : added ? "#fff" : "#CC1111",
          borderColor: agotado ? "#1A1A1A" : "#CC1111",
        }}
      >
        {added ? "¡Agregado al carrito!" : "Agregar al carrito"}
      </button>
    </div>
  );
}

function WAIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}
