"use client";

import type { TallaStock } from "@/types/product";

const FB = { fontFamily: "var(--font-barlow), sans-serif" };

const SIZE_PRIORITY: Record<string, number> = {
  XS: 0, S: 1, M: 2, L: 3, XL: 4, XXL: 5, XXXL: 6, "3XL": 6,
  "4": 10, "6": 11, "8": 12, "10": 13, "12": 14, "14": 15, "16": 16,
};

function sortTallas(tallas: TallaStock[]) {
  return [...tallas].sort((a, b) => {
    const pa = SIZE_PRIORITY[a.talla] ?? 99;
    const pb = SIZE_PRIORITY[b.talla] ?? 99;
    if (pa !== pb) return pa - pb;
    return a.talla.localeCompare(b.talla);
  });
}

interface Props {
  tallas: TallaStock[];
  selected: string | null;
  onChange: (talla: string) => void;
  showError: boolean;
  onGuideOpen: () => void;
}

export default function SizeSelector({
  tallas,
  selected,
  onChange,
  showError,
  onGuideOpen,
}: Props) {
  const sorted = sortTallas(tallas);

  return (
    <div className="flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-bold uppercase tracking-[2px]"
          style={{ ...FB, color: "#A0A0A0" }}
        >
          Talla{selected ? `: ${selected}` : ""}
        </span>
        <button
          type="button"
          onClick={onGuideOpen}
          className="text-xs underline underline-offset-2 transition-opacity hover:opacity-70"
          style={{ ...FB, color: "#606060" }}
        >
          Guía de tallas
        </button>
      </div>

      {/* Size grid */}
      <div className="flex flex-wrap gap-2">
        {sorted.map((t) => {
          const disponible = t.cantidad > 0;
          const isSelected = selected === t.talla;
          return (
            <button
              key={t.talla}
              type="button"
              disabled={!disponible}
              onClick={() => onChange(t.talla)}
              aria-label={`Talla ${t.talla}${disponible ? "" : ", agotado"}`}
              aria-pressed={isSelected}
              className="relative flex h-11 min-w-[44px] items-center justify-center rounded-lg border px-3 font-bold uppercase transition-all duration-200 active:scale-[0.96]"
              style={{
                ...FB,
                fontSize: 13,
                letterSpacing: "1px",
                background: isSelected ? "#F5F5F5" : "transparent",
                color: !disponible ? "#2A2A2A" : isSelected ? "#0A0A0A" : "#A0A0A0",
                borderColor: !disponible ? "#1A1A1A" : isSelected ? "#F5F5F5" : "#2E2E2E",
                cursor: !disponible ? "not-allowed" : "pointer",
                textDecoration: !disponible ? "line-through" : "none",
              }}
            >
              {t.talla}
            </button>
          );
        })}
      </div>

      {/* Error */}
      {showError && (
        <p className="text-sm" style={{ ...FB, color: "#CC1111" }}>
          ⚠ Selecciona una talla para continuar
        </p>
      )}
    </div>
  );
}
