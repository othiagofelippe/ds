import { colors, typography } from "@/tokens";
import styled from "@emotion/styled";
import { TypographyProps } from "./Typography.types";

const colorMap = {
  headline: colors.text.headline,
  heading: colors.text.heading,
  body: colors.text.body,
  span: colors.text.span,
  brand: colors.brand.pure,
  error: colors.feedback.error,
  white: colors.background.primary,
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
  color: ${(props) =>
    props.$color ? colorMap[props.$color] : colors.text.body};
  margin: 0;
`;
