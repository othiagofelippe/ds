"use client";

import { Container } from "./Card.styles";
import { CardProps } from "./Card.types";

export const Card = ({ children, ...props }: CardProps) => {
  return <Container {...props}>{children}</Container>;
};
