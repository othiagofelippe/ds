import { ComponentProps, ReactNode } from "react";

export interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
}
