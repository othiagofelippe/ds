import { colors, spacing } from "@/tokens";
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${colors.background.primary};
  border: 1px solid ${colors.border.primary};
  border-radius: 12px;
  padding: ${spacing[6]}px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;
