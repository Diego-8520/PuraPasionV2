import Link from "next/link";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

export default function ProductNotFound() {
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{ background: "#0A0A0A" }}
    >
      <div className="flex flex-col items-center gap-6 px-4 text-center">
        <div className="text-7xl" style={{ opacity: 0.15 }}>
          ⚽
        </div>
        <h1
          className="leading-none"
          style={{
            ...FD,
            fontSize: "clamp(40px, 8vw, 72px)",
            letterSpacing: "3px",
            color: "#F5F5F5",
          }}
        >
          Producto no encontrado
        </h1>
        <p className="max-w-xs text-sm" style={{ ...FB, color: "#A0A0A0" }}>
          Este producto no está disponible o ha sido retirado del catálogo.
        </p>
        <Link
          href="/catalogo"
          className="rounded-full px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-80"
          style={{ ...FB, background: "#CC1111" }}
        >
          Ver catálogo completo
        </Link>
      </div>
    </main>
  );
}
