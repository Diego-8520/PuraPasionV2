import type { Producto } from "@/types/product";
import ProductCard from "@/components/catalogo/ProductCard";

const FD = { fontFamily: "var(--font-bebas), sans-serif" };
const FB = { fontFamily: "var(--font-barlow), sans-serif" };

export default function RelatedProducts({ productos }: { productos: Producto[] }) {
  if (productos.length === 0) return null;

  return (
    <section className="mt-16 pt-12" style={{ borderTop: "1px solid #1E1E1E" }}>
      <div className="mb-8 text-center">
        <p
          className="mb-2 text-xs font-bold uppercase tracking-[5px]"
          style={{ ...FB, color: "#D4AF37" }}
        >
          También te puede gustar
        </p>
        <h2
          className="leading-none"
          style={{
            ...FD,
            fontSize: "clamp(32px, 6vw, 52px)",
            letterSpacing: "3px",
            color: "#F5F5F5",
          }}
        >
          Productos relacionados
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
