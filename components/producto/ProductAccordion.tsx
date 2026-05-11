"use client";

import { useState } from "react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

const FB = { fontFamily: "var(--font-barlow), sans-serif" };

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function ProductAccordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ borderTop: "1px solid #1E1E1E" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid #1E1E1E" }}>
          <button
            type="button"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left transition-colors"
            style={{
              ...FB,
              color: openIndex === i ? "#F5F5F5" : "#A0A0A0",
            }}
          >
            <span className="text-sm font-bold uppercase tracking-[2px]">
              {item.title}
            </span>
            <span style={{ color: openIndex === i ? "#D4AF37" : "#505050" }}>
              <ChevronIcon open={openIndex === i} />
            </span>
          </button>
          <div
            style={{
              maxHeight: openIndex === i ? "400px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            <div className="pb-5 text-sm" style={{ ...FB, color: "#A0A0A0", lineHeight: 1.7 }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
