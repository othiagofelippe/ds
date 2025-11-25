"use client";

import { Container, Image } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const Avatar = ({ src, name, size = "md", ...props }: AvatarProps) => {
  return (
    <Container size={size} {...props}>
      {src ? <Image src={src} alt={name} /> : getInitials(name)}
    </Container>
  );
};
