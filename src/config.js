// Replace this with the business's confirmed WhatsApp number.
// International format, digits only: South African 071 200 1415 -> 27712001415.
export const WHATSAPP_NUMBER = "27712001415";
export const DISPLAY_NUMBER = "071 200 1415";

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  return window.open(url, "_blank", "noopener,noreferrer");
}
