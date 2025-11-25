import { ComponentProps, ReactNode } from "react";

export type InputIconPosition = "left" | "right";

export interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: InputIconPosition;
  onIconClick?: () => void;
}
