import { spacing, borderRadius, shadows } from "@/tokens";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.primary};
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  border-radius: ${borderRadius.xl};
  padding: ${spacing[6]}px;
  transition: all 0.2s;

  &:hover {
    box-shadow: ${shadows.md};
  }
`;
