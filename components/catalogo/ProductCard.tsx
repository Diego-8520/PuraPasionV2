"use client";

import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/types/product";
import {
  getPrecioMinimo,
  getStockTotal,
  getImagenPrincipal,
  getWhatsappUrl,
} from "@/services/productos";

interface Props {
  producto: Producto;
}

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

export default function ProductCard({ producto }: Props) {
  const precio = getPrecioMinimo(producto);
  const stock = getStockTotal(producto);
  const imagen = getImagenPrincipal(producto);
  const whatsappUrl = getWhatsappUrl(producto);
  const agotado = stock === 0;
  const ultimasUnidades = !agotado && stock <= 5;

  const precioFormateado =
    precio > 0
      ? new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0,
        }).format(precio)
      : "Consultar";

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#141414] transition-all duration-300 hover:border-[#2A2A2A] hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
      style={{ opacity: agotado ? 0.7 : 1 }}
    >
      {/* ── IMAGE ── */}
      <div className="relative aspect-square overflow-hidden bg-[#0E0E0E]">
        {imagen ? (
          <Image
            src={imagen}
            alt={producto.nombre}
            fill
            unoptimized
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(239,239,239,0.08)"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L2 6l2 2 2-2v12a2 2 0 002 2h8a2 2 0 002-2V6l2 2 2-2-4-4H6z" />
              <path d="M9 2v3m6-3v3" />
            </svg>
          </div>
        )}

        {/* Sold out overlay */}
        {agotado && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/55">
            <span
              className="rounded-full border border-[#2A2A2A] bg-[#0A0A0A]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px]"
              style={{ ...FB, color: "#606060" }}
            >
              Agotado
            </span>
          </div>
        )}

        {/* Manual badge (gold) */}
        {producto.badge_manual && (
          <span
            className="absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-widest"
            style={{ ...FB, background: "#D4AF37", color: "#0A0A0A" }}
          >
            {producto.badge_manual}
          </span>
        )}

        {/* Low stock badge — red is acceptable for scarcity */}
        {ultimasUnidades && (
          <span
            className="absolute right-3 top-3 z-10 rounded-full bg-[#CC1111] px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-white"
            style={FB}
          >
            Ultimas {stock}
          </span>
        )}
      </div>

      {/* ── INFO ── */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Team */}
        {producto.equipos && (
          <div className="flex items-center gap-1.5">
            {producto.equipos.escudo_url && (
              <div className="relative h-4 w-4 shrink-0">
                <Image
                  src={producto.equipos.escudo_url}
                  alt={producto.equipos.nombre}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            )}
            <span
              className="truncate text-xs font-semibold uppercase tracking-[2px]"
              style={{ ...FB, color: "#606060" }}
            >
              {producto.equipos.nombre}
            </span>
          </div>
        )}

        {/* Name */}
        <h3
          className="line-clamp-2 leading-tight text-[#EFEFEF]"
          style={{ ...FD, fontSize: "20px", letterSpacing: "1px" }}
        >
          {producto.nombre}
        </h3>

        {/* Season / quality */}
        <div
          className="flex items-center gap-2 text-xs"
          style={{ ...FB, color: "#505050" }}
        >
          {producto.temporada && <span>{producto.temporada}</span>}
          {producto.temporada && producto.calidades && (
            <span style={{ color: "#252525" }}>·</span>
          )}
          {producto.calidades && <span>{producto.calidades.nombre}</span>}
        </div>

        {/* Price row */}
        <div className="mt-auto flex items-end justify-between gap-2 border-t border-[#1A1A1A] pt-3">
          <span
            className="leading-none text-[#EFEFEF]"
            style={{ ...FD, fontSize: "22px" }}
          >
            {precioFormateado}
          </span>
          {stock > 0 && (
            <span
              className="shrink-0 text-xs"
              style={{ ...FB, color: "#505050" }}
            >
              {stock} disp.
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-2 flex gap-2">
          {agotado ? (
            <button
              disabled
              className="flex-1 rounded-xl border border-[#1A1A1A] bg-transparent py-2.5 text-xs font-bold uppercase tracking-widest text-[#404040] cursor-not-allowed"
              style={FB}
            >
              Agotado
            </button>
          ) : (
            <Link
              href={`/producto/${producto.id}`}
              className="flex flex-1 items-center justify-center rounded-xl border border-[#2A2A2A] bg-transparent py-2.5 text-xs font-bold uppercase tracking-widest text-[#EFEFEF] transition-all duration-200 hover:bg-[#EFEFEF] hover:text-[#0A0A0A] hover:border-[#EFEFEF] active:scale-[0.97]"
              style={FB}
            >
              Ver producto
            </Link>
          )}

          <a
            href={agotado ? undefined : whatsappUrl}
            target={agotado ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label="Pedir por WhatsApp"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 active:scale-[0.97]"
            style={{
              pointerEvents: agotado ? "none" : "auto",
              background: agotado ? "#1A1A1A" : "rgba(37,211,102,0.12)",
              color: agotado ? "#404040" : "#25D366",
              border: agotado
                ? "1px solid #1A1A1A"
                : "1px solid rgba(37,211,102,0.25)",
            }}
          >
            <WAIcon />
          </a>
        </div>
      </div>
    </article>
  );
}

function WAIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}
