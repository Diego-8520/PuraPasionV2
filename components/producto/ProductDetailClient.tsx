"use client";

import { useState } from "react";
import Link from "next/link";
import type { Producto } from "@/types/product";
import { getStockTotal, getPrecioMinimo } from "@/services/productos";
import { formatPrice } from "@/utils/formatPrice";
import ProductGallery from "./ProductGallery";
import SizeSelector from "./SizeSelector";
import ProductActions from "./ProductActions";
import ProductAccordion, { type AccordionItem } from "./ProductAccordion";
import SizeGuideModal from "./SizeGuideModal";
import RelatedProducts from "./RelatedProducts";

interface Props {
  producto: Producto;
  relacionados: Producto[];
}

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

function getBadge(producto: Producto) {
  const stock = getStockTotal(producto);
  if (stock === 0)
    return { text: "AGOTADO", color: "#606060", bg: "#1A1A1A", border: "#2A2A2A" };
  if (producto.badge_manual)
    return { text: producto.badge_manual, color: "#0A0A0A", bg: "#D4AF37", border: "#D4AF37" };
  if (stock <= 5)
    return { text: "ÚLTIMAS UNID.", color: "#fff", bg: "#CC1111", border: "#CC1111" };
  return null;
}

export default function ProductDetailClient({ producto, relacionados }: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeError, setSizeError] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const stockTotal = getStockTotal(producto);
  const agotado = stockTotal === 0;
  const ultimasUnidades = !agotado && stockTotal <= 5;

  const selectedTallaData = producto.tallas_stock.find((t) => t.talla === selectedSize);
  const precioMostrar = selectedTallaData?.precio ?? getPrecioMinimo(producto);

  const badge = getBadge(producto);

  function handleSizeChange(talla: string) {
    setSelectedSize(talla);
    setSizeError(false);
  }

  function handleSizeRequired() {
    setSizeError(true);
    document
      .getElementById("size-selector")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const accordionItems: AccordionItem[] = [
    ...(producto.descripcion
      ? [
          {
            title: "Descripción",
            content: <p>{producto.descripcion}</p>,
          },
        ]
      : []),
    {
      title: "Material y composición",
      content: (
        <p>
          100% poliéster de alta calidad. Tela transpirable y de secado rápido,
          ideal para uso deportivo y casual.
        </p>
      ),
    },
    {
      title: "Guía de tallas",
      content: (
        <button
          type="button"
          onClick={() => setShowSizeGuide(true)}
          className="underline underline-offset-2"
          style={{ color: "#D4AF37" }}
        >
          Ver tabla de medidas completa →
        </button>
      ),
    },
    {
      title: "Envíos y pagos",
      content: (
        <ul style={{ paddingLeft: 16, listStyle: "disc" }}>
          <li>Envíos a toda Colombia</li>
          <li>Entrega inmediata en Cali — sector Alcázares</li>
          <li>Pago contraentrega disponible</li>
          <li>1–3 días hábiles en Cali · 3–7 días en el resto del país</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 md:pt-12">
      {/* Breadcrumb */}
      <nav
        className="mb-6 flex flex-wrap items-center gap-1.5 text-xs"
        aria-label="Ruta de navegación"
        style={{ ...FB, color: "#505050" }}
      >
        <Link href="/" className="hover:text-[#A0A0A0] transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/catalogo" className="hover:text-[#A0A0A0] transition-colors">
          Catálogo
        </Link>
        <span>/</span>
        <span style={{ color: "#A0A0A0" }}>{producto.nombre}</span>
      </nav>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
        {/* ── LEFT: Gallery (sticky on desktop) ── */}
        <div className="md:sticky md:top-24 md:self-start">
          <ProductGallery imagenes={producto.imagenes} nombre={producto.nombre} />
        </div>

        {/* ── RIGHT: Product info ── */}
        <div className="flex flex-col gap-5">
          {/* Badge */}
          {badge && (
            <div>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest"
                style={{
                  ...FB,
                  background: badge.bg,
                  color: badge.color,
                  border: `1px solid ${badge.border}`,
                }}
              >
                {badge.text}
              </span>
            </div>
          )}

          {/* Team + season */}
          {(producto.equipos || producto.temporada) && (
            <div className="flex flex-wrap items-center gap-2">
              {producto.equipos && (
                <span
                  className="text-xs font-bold uppercase tracking-[3px]"
                  style={{ ...FB, color: "#606060" }}
                >
                  {producto.equipos.nombre}
                </span>
              )}
              {producto.equipos && producto.temporada && (
                <span style={{ color: "#2E2E2E" }}>·</span>
              )}
              {producto.temporada && (
                <span
                  className="text-xs uppercase tracking-[2px]"
                  style={{ ...FB, color: "#404040" }}
                >
                  {producto.temporada}
                </span>
              )}
            </div>
          )}

          {/* Name */}
          <h1
            className="leading-none"
            style={{
              ...FD,
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "2px",
              color: "#F5F5F5",
            }}
          >
            {producto.nombre}
          </h1>

          {/* Quality */}
          {producto.calidades && (
            <span
              className="text-xs uppercase tracking-[2px]"
              style={{ ...FB, color: "#505050" }}
            >
              {producto.calidades.nombre}
            </span>
          )}

          {/* Price */}
          <div>
            <span
              className="leading-none"
              style={{
                ...FD,
                fontSize: "clamp(30px, 4vw, 48px)",
                color: precioMostrar > 0 ? "#F5F5F5" : "#A0A0A0",
              }}
            >
              {precioMostrar > 0 ? formatPrice(precioMostrar) : "Consultar precio"}
            </span>
          </div>

          {/* Stock status */}
          {!agotado && (
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: ultimasUnidades ? "#CC1111" : "#25D366" }}
              />
              <span
                className="text-sm"
                style={{
                  ...FB,
                  color: ultimasUnidades ? "#CC1111" : "#25D366",
                }}
              >
                {ultimasUnidades
                  ? `¡Solo quedan ${stockTotal} unidades!`
                  : "En stock"}
              </span>
            </div>
          )}

          <div className="h-px" style={{ background: "#1E1E1E" }} />

          {/* Size selector */}
          <div id="size-selector">
            <SizeSelector
              tallas={producto.tallas_stock}
              selected={selectedSize}
              onChange={handleSizeChange}
              showError={sizeError}
              onGuideOpen={() => setShowSizeGuide(true)}
            />
          </div>

          {/* CTA buttons */}
          <ProductActions
            producto={producto}
            selectedSize={selectedSize}
            onSizeRequired={handleSizeRequired}
          />

          {/* Accordions */}
          <div className="mt-2">
            <ProductAccordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts productos={relacionados} />

      {/* Size guide modal */}
      <SizeGuideModal
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </div>
  );
}
