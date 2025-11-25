import { colors } from "./colors";

export const lightTheme = {
  colors: {
    brand: colors.brand,
    background: colors.background,
    text: colors.text,
    feedback: colors.feedback,
    border: colors.border,
  },
};

export const darkTheme = {
  colors: {
    brand: colors.brand,
    background: colors.dark.background,
    text: colors.dark.text,
    feedback: colors.feedback,
    border: colors.dark.border,
  },
};

export type Theme = typeof lightTheme;
