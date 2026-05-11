import type { Metadata } from "next";
import { getProductoById, getProductosRelacionados } from "@/services/productos";
import ProductDetailClient from "@/components/producto/ProductDetailClient";
import ProductNotFound from "@/components/producto/ProductNotFound";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const producto = await getProductoById(id);

  if (!producto) {
    return { title: "Producto no encontrado | Pura Pasión" };
  }

  return {
    title: `${producto.nombre} | Pura Pasión Fútbol Store`,
    description:
      producto.descripcion ??
      `Camiseta ${producto.nombre} disponible en Pura Pasión Fútbol Store, Cali.`,
  };
}

export default async function ProductoPage({ params }: Props) {
  const { id } = await params;

  const producto = await getProductoById(id);

  if (!producto) {
    return <ProductNotFound />;
  }

  const relacionados = await getProductosRelacionados(
    producto.id,
    producto.equipos?.id ?? null,
    producto.categorias?.id ?? null
  );

  return (
    <main className="min-h-screen" style={{ background: "#0A0A0A" }}>
      <ProductDetailClient producto={producto} relacionados={relacionados} />
    </main>
  );
}
