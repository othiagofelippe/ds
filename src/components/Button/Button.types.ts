import { ComponentProps, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps extends ComponentProps<"button"> {
  children: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
}
