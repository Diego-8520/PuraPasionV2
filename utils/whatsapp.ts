import { formatPrice } from "@/utils/formatPrice";
import type { CartItem } from "@/types/cart";

const WA_NUMBER = "573057510901";

export function createWhatsAppProductMessage(
  nombre: string,
  talla?: string
): string {
  const tallaText = talla ? ` - Talla ${talla}` : "";
  const text = encodeURIComponent(`Hola! Quiero pedir: ${nombre}${tallaText}`);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

export function createWhatsAppCartMessage(items: CartItem[]): string {
  const lines = items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name}\n   Talla: ${item.size}\n   Cantidad: ${item.quantity}\n   Precio unitario: ${formatPrice(item.price)}\n   Subtotal: ${formatPrice(item.price * item.quantity)}`
    )
    .join("\n\n");
  const total = formatPrice(
    items.reduce((s, i) => s + i.price * i.quantity, 0)
  );
  const message = [
    "Hola! Quiero hacer este pedido en Pura Pasión:",
    "",
    lines,
    "",
    `Total estimado: ${total}`,
    "",
    "Quedo atento para confirmar disponibilidad, envío y forma de pago.",
  ].join("\n");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
