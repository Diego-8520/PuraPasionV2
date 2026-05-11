"use client";

const FB = { fontFamily: "var(--font-barlow), sans-serif" };

interface Props {
  quantity: number;
  stock: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartQuantityControl({
  quantity,
  stock,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div
      className="flex items-center overflow-hidden rounded-lg"
      style={{ border: "1px solid #2E2E2E" }}
      role="group"
      aria-label="Cantidad"
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Reducir cantidad"
        className="flex h-9 w-9 items-center justify-center transition-colors disabled:cursor-not-allowed"
        style={{
          ...FB,
          background: "transparent",
          color: quantity <= 1 ? "#404040" : "#A0A0A0",
          fontSize: 20,
          lineHeight: 1,
          border: "none",
        }}
      >
        −
      </button>

      <span
        className="flex h-9 w-10 items-center justify-center text-sm font-bold"
        style={{
          ...FB,
          color: "#F5F5F5",
          borderLeft: "1px solid #2E2E2E",
          borderRight: "1px solid #2E2E2E",
        }}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= stock}
        aria-label="Aumentar cantidad"
        className="flex h-9 w-9 items-center justify-center transition-colors disabled:cursor-not-allowed"
        style={{
          ...FB,
          background: "transparent",
          color: quantity >= stock ? "#404040" : "#A0A0A0",
          fontSize: 20,
          lineHeight: 1,
          border: "none",
        }}
      >
        +
      </button>
    </div>
  );
}
