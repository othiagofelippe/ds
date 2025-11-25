import { spacing, borderRadius, typography } from "@/tokens";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";

const sizeStyles = {
  sm: css`
    padding: ${spacing[2]}px ${spacing[4]}px;
    font-size: ${typography.sm.fontSize}px;
  `,
  md: css`
    padding: ${spacing[3]}px ${spacing[6]}px;
    font-size: ${typography.base.fontSize}px;
  `,
  lg: css`
    padding: ${spacing[4]}px ${spacing[8]}px;
    font-size: ${typography.lg.fontSize}px;
  `,
};

const variantStyles = {
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.brand.pure};
    color: ${theme.colors.background.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.brand.dark};
    }
  `,
  secondary: (theme: Theme) => css`
    background-color: ${theme.colors.background.secondary};
    color: ${theme.colors.text.headline};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.background.tertiary};
    }
  `,
  outline: (theme: Theme) => css`
    background-color: transparent;
    color: ${theme.colors.brand.pure};
    border: 2px solid ${theme.colors.brand.pure};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.brand.pure};
      color: ${theme.colors.background.primary};
    }
  `,
};

export const StyledButton = styled.button<{
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
  fullWidth: boolean;
}>`
  border: none;
  border-radius: ${borderRadius.lg};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing[2]}px;

  ${(props) => sizeStyles[props.size || "md"]}
  ${(props) => variantStyles[props.variant || "primary"](props.theme)}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
