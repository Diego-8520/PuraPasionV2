"use client";

import { useEffect } from "react";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

const GUIDE = [
  { talla: "S", pecho: "88–92", cintura: "72–76", largo: "70" },
  { talla: "M", pecho: "96–100", cintura: "80–84", largo: "72" },
  { talla: "L", pecho: "104–108", cintura: "88–92", largo: "74" },
  { talla: "XL", pecho: "112–116", cintura: "96–100", largo: "76" },
  { talla: "XXL", pecho: "120–124", cintura: "104–108", largo: "78" },
  { talla: "XXXL", pecho: "128–132", cintura: "112–116", largo: "80" },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-6"
        style={{ background: "#141414", border: "1px solid #2E2E2E" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="size-guide-title"
            style={{ ...FD, fontSize: 28, letterSpacing: "2px", color: "#F5F5F5" }}
          >
            Guía de tallas
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar guía de tallas"
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors hover:bg-[#2A2A2A]"
            style={{ color: "#606060", border: "1px solid #2E2E2E" }}
          >
            ✕
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ ...FB, color: "#A0A0A0" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #2E2E2E" }}>
                {["Talla", "Pecho (cm)", "Cintura (cm)", "Largo (cm)"].map((h) => (
                  <th
                    key={h}
                    className="py-2 pr-4 text-left font-bold"
                    style={{ color: "#F5F5F5" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GUIDE.map((row, i) => (
                <tr
                  key={row.talla}
                  style={{
                    borderBottom: i < GUIDE.length - 1 ? "1px solid #1A1A1A" : "none",
                  }}
                >
                  <td className="py-2.5 pr-4 font-bold" style={{ color: "#F5F5F5" }}>
                    {row.talla}
                  </td>
                  <td className="py-2.5 pr-4">{row.pecho}</td>
                  <td className="py-2.5 pr-4">{row.cintura}</td>
                  <td className="py-2.5">{row.largo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-xs" style={{ ...FB, color: "#505050" }}>
          Medidas en centímetros. Para dudas sobre la talla, contáctanos por WhatsApp antes de pedir.
        </p>
      </div>
    </div>
  );
}
