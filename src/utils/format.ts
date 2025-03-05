export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  return cleaned.replace(/^(\d{2})(\d{2})(\d{4,5})(\d{4})$/, "+$1 ($2) $3-$4");
}

export function formatDate(dateString: string): string {
  if (!dateString) return "Data inválida";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Data inválida";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
