"use client";

import Image from "next/image";
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

const FONT_BEBAS = { fontFamily: "var(--font-bebas), sans-serif" };
const FONT_BARLOW = { fontFamily: "var(--font-barlow), sans-serif" };

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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#2E2E2E] bg-[#1E1E1E] transition-all duration-300 hover:-translate-y-1 hover:border-[#CC1111]/50 hover:shadow-[0_12px_48px_rgba(204,17,17,0.22)]"
      style={{
        opacity: agotado ? 0.75 : 1,
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-[#151515]">
        {imagen ? (
          <Image
            src={imagen}
            alt={producto.nombre}
            fill
            unoptimized
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl opacity-20">⚽</span>
          </div>
        )}

        {agotado && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
            <span
              className="rounded-full border border-[#2E2E2E] bg-[#0A0A0A]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-[#A0A0A0]"
              style={FONT_BARLOW}
            >
              Agotado
            </span>
          </div>
        )}

        {producto.badge_manual && (
          <span
            className="absolute left-3 top-3 z-10 rounded-full bg-[#D4AF37] px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-[#0A0A0A]"
            style={FONT_BARLOW}
          >
            {producto.badge_manual}
          </span>
        )}

        {ultimasUnidades && (
          <span
            className="absolute right-3 top-3 z-10 rounded-full bg-[#CC1111] px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-white"
            style={FONT_BARLOW}
          >
            ¡Últimas {stock}!
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        {producto.equipos && (
          <div className="flex items-center gap-1.5">
            {producto.equipos.escudo_url && (
              <div className="relative h-5 w-5 shrink-0">
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
              className="truncate text-xs font-semibold uppercase tracking-[2px] text-[#A0A0A0]"
              style={FONT_BARLOW}
            >
              {producto.equipos.nombre}
            </span>
          </div>
        )}

        <h3
          className="line-clamp-2 text-xl leading-tight text-[#F5F5F5]"
          style={{
            ...FONT_BEBAS,
            letterSpacing: "1.5px",
          }}
        >
          {producto.nombre}
        </h3>

        <div
          className="flex items-center gap-2 text-xs text-[#A0A0A0]"
          style={FONT_BARLOW}
        >
          {producto.temporada && <span>{producto.temporada}</span>}

          {producto.temporada && producto.calidades && (
            <span className="text-[#2E2E2E]">•</span>
          )}

          {producto.calidades && <span>{producto.calidades.nombre}</span>}
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 border-t border-[#2E2E2E] pt-3">
          <span
            className="text-2xl leading-none text-[#F5F5F5]"
            style={FONT_BEBAS}
          >
            {precioFormateado}
          </span>

          {stock > 0 && (
            <span
              className="shrink-0 text-xs text-[#A0A0A0]"
              style={FONT_BARLOW}
            >
              {stock} disp.
            </span>
          )}
        </div>

        <div className="mt-2 flex gap-2">
          <button
            disabled={agotado}
            className="flex-1 rounded-xl bg-[#CC1111] py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 active:scale-[0.97] disabled:cursor-not-allowed disabled:bg-[#2E2E2E] disabled:text-[#A0A0A0]"
            style={FONT_BARLOW}
          >
            {agotado ? "Agotado" : "Agregar"}
          </button>

          <a
            href={agotado ? undefined : whatsappUrl}
            target={agotado ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label="Pedir por WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition-all duration-200 active:scale-[0.97]"
            style={{
              pointerEvents: agotado ? "none" : "auto",
              background: agotado ? "#2E2E2E" : "#25D366",
              color: agotado ? "#A0A0A0" : "#fff",
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
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.827L0 24l6.335-1.668A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.025-1.372l-.36-.214-3.735.984 1.002-3.636-.236-.374A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}
