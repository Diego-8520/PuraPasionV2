import type { Metadata } from "next";
import CartPage from "@/components/cart/CartPage";

export const metadata: Metadata = {
  title: "Carrito | Pura Pasión Fútbol Store",
};

export default function CarritoPage() {
  return <CartPage />;
}
