import { spacing, borderRadius, typography } from "@/tokens";
import styled from "@emotion/styled";

export const Container = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]}px;
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
`;

export const Label = styled.label`
  font-size: ${typography.sm.fontSize}px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.heading};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input<{
  hasError: boolean;
  hasIcon: boolean;
  iconPosition?: "left" | "right";
}>`
  width: 100%;
  padding: ${spacing[3]}px;
  padding-left: ${(props) =>
    props.hasIcon && props.iconPosition === "left"
      ? `${spacing[10]}px`
      : `${spacing[3]}px`};
  padding-right: ${(props) =>
    props.hasIcon && props.iconPosition === "right"
      ? `${spacing[10]}px`
      : `${spacing[3]}px`};
  border: 2px solid
    ${(props) =>
      props.hasError ? props.theme.colors.feedback.error : props.theme.colors.border.primary};
  border-radius: ${borderRadius.lg};
  font-size: ${typography.base.fontSize}px;
  transition: all 0.2s;
  color: ${(props) => props.theme.colors.text.body};
  background-color: ${(props) => props.theme.colors.background.primary};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? props.theme.colors.feedback.error : props.theme.colors.brand.pure};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.background.secondary};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.span};
  }
`;

export const IconContainer = styled.div<{
  position: "left" | "right";
  clickable: boolean;
}>`
  position: absolute;
  ${(props) => props.position === "left" ? `left: ${spacing[3]}px;` : `right: ${spacing[3]}px;`}
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text.span};
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};

  &:hover {
    color: ${(props) =>
      props.clickable ? props.theme.colors.brand.pure : props.theme.colors.text.span};
  }
`;

export const ErrorText = styled.span`
  font-size: ${typography.xs.fontSize}px;
  color: ${(props) => props.theme.colors.feedback.error};
`;
