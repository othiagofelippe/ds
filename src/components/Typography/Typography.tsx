"use client";

import { StyledTypography } from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  children,
  size = "base",
  family = "poppins",
  as = "p",
  color,
  ...props
}: TypographyProps) => {
  return (
    <StyledTypography
      as={as}
      size={size}
      family={family}
      $color={color}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};
