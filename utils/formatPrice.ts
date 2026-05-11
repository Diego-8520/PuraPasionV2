const FORMATTER = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return FORMATTER.format(amount);
}
