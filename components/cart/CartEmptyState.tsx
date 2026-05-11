"use client";

import Link from "next/link";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

export default function CartEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full"
        style={{ background: "#141414", border: "1px solid #2E2E2E" }}
      >
        <BagIcon />
      </div>

      <div className="flex flex-col gap-3">
        <h2
          className="leading-none tracking-[2px]"
          style={{ ...FD, fontSize: "clamp(32px,5vw,48px)", color: "#F5F5F5" }}
        >
          Tu carrito está vacío
        </h2>
        <p className="text-sm" style={{ ...FB, color: "#A0A0A0" }}>
          Agrega tus camisetas favoritas y vuelve para armar tu pedido.
        </p>
      </div>

      <Link
        href="/catalogo"
        className="flex min-h-[48px] items-center rounded-xl px-8 font-bold uppercase tracking-widest transition-all duration-200 hover:brightness-90 active:scale-[0.97]"
        style={{ ...FB, fontSize: 13, background: "#CC1111", color: "#fff" }}
      >
        Ver productos
      </Link>
    </div>
  );
}

function BagIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(239,239,239,0.25)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
