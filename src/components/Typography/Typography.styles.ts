import { typography } from "@/tokens";
import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { TypographyProps } from "./Typography.types";

const getColor = (theme: Theme, color?: TypographyProps["color"]) => {
  if (!color) return theme.colors.text.body;

  const colorMap = {
    headline: theme.colors.text.headline,
    heading: theme.colors.text.heading,
    body: theme.colors.text.body,
    span: theme.colors.text.span,
    brand: theme.colors.brand.pure,
    error: theme.colors.feedback.error,
    white: theme.colors.background.primary,
  };

  return colorMap[color];
};

export const StyledTypography = styled.p<{
  size: TypographyProps["size"];
  family: TypographyProps["family"];
  $color?: TypographyProps["color"];
}>`
  font-family: ${(props) => typography.fontFamily[props.family || "poppins"]};
  font-size: ${(props) => typography[props.size || "base"].fontSize}px;
  line-height: ${(props) => typography[props.size || "base"].lineHeight}px;
  font-weight: ${(props) => typography[props.size || "base"].fontWeight};
  color: ${(props) => getColor(props.theme, props.$color)};
  margin: 0;
`;
