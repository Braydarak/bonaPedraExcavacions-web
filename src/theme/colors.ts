// Paleta de colores de la aplicación
// Úsalo importando: import { colors } from "../theme/colors";

export const colors = {
  primary: "#695f4d",
  secondary: "#cbc7b7",
  accent: "#be8c6b",
} as const;

export type AppColors = typeof colors;
export type AppColorName = keyof AppColors;