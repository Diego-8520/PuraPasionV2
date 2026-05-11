"use client";

import { useState } from "react";
import Image from "next/image";
import type { Imagen } from "@/types/product";

interface Props {
  imagenes: Imagen[];
  nombre: string;
}

function PlaceholderIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(239,239,239,0.06)"
      strokeWidth="0.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export default function ProductGallery({ imagenes, nombre }: Props) {
  const sorted = [...imagenes].sort((a, b) => a.orden - b.orden);
  const [selected, setSelected] = useState(0);

  const current = sorted[selected] ?? null;

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="group relative aspect-square overflow-hidden rounded-2xl border bg-[#0E0E0E]" style={{ borderColor: "#1E1E1E" }}>
        {current ? (
          <Image
            key={current.id}
            src={current.url}
            alt={`${nombre} — imagen ${selected + 1}`}
            fill
            unoptimized
            priority={selected === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <PlaceholderIcon />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {sorted.length > 1 && (
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
        >
          {sorted.map((img, i) => (
            <button
              key={img.id}
              type="button"
              aria-label={`Ver imagen ${i + 1}`}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
              className="relative shrink-0 overflow-hidden rounded-lg border transition-all duration-200"
              style={{
                width: 72,
                height: 72,
                borderColor: selected === i ? "#F5F5F5" : "#1E1E1E",
                opacity: selected === i ? 1 : 0.5,
              }}
            >
              <Image
                src={img.url}
                alt={`${nombre} — vista ${i + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
