"use client";

import { IconWrapper, StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      {...props}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
    >
      {loading ? (
        "⏳ Carregando..."
      ) : (
        <>
          {icon && iconPosition === "left" && <IconWrapper>{icon}</IconWrapper>}
          {children}
          {icon && iconPosition === "right" && (
            <IconWrapper>{icon}</IconWrapper>
          )}
        </>
      )}
    </StyledButton>
  );
};
