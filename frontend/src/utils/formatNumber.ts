export function formatNumber(value: number): string {
  return value.toLocaleString('de-DE', { minimumFractionDigits: 0 });
}
