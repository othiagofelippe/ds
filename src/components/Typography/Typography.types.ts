import { ComponentProps, ReactNode } from "react";

export type TypographySize =
  | "6xl"
  | "5xl"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "base"
  | "sm"
  | "xs";

export type TypographyFamily = "poppins" | "roboto";

export type TypographyColor =
  | "headline"
  | "heading"
  | "body"
  | "span"
  | "brand"
  | "error"
  | "white";

export interface TypographyProps extends ComponentProps<"p"> {
  children: ReactNode;
  size?: TypographySize;
  family?: TypographyFamily;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: TypographyColor;
}
