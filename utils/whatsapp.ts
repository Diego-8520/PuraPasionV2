const WA_NUMBER = "573057510901";

export function createWhatsAppProductMessage(
  nombre: string,
  talla?: string
): string {
  const tallaText = talla ? ` - Talla ${talla}` : "";
  const text = encodeURIComponent(`Hola! Quiero pedir: ${nombre}${tallaText}`);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
