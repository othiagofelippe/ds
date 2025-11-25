import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { borderRadius } from "@/tokens";
import { AvatarProps } from "./Avatar.types";

const sizeStyles = {
  sm: css`
    width: 32px;
    height: 32px;
    font-size: 14px;
  `,
  md: css`
    width: 48px;
    height: 48px;
    font-size: 18px;
  `,
  lg: css`
    width: 64px;
    height: 64px;
    font-size: 24px;
  `,
};

export const Container = styled.div<{ size: AvatarProps["size"] }>`
  border-radius: ${borderRadius.full};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.brand.pure};
  color: ${(props) => props.theme.colors.background.primary};
  font-weight: 600;
  flex-shrink: 0;

  ${(props) => sizeStyles[props.size || "md"]}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
