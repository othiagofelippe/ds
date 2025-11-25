import { ComponentProps } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends ComponentProps<"div"> {
  src?: string;
  name: string;
  size?: AvatarSize;
}
