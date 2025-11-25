import { colors, spacing } from "@/tokens";
import styled from "@emotion/styled";

export const Container = styled.div<{ fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[2]}px;
  width: ${(props) => (props.fullWidth ? "100%" : "300px")};
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text.heading};
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
      props.hasError ? colors.feedback.error : colors.border.primary};
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s;
  color: ${colors.text.body};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.hasError ? colors.feedback.error : colors.brand.pure};
  }

  &:disabled {
    background-color: ${colors.background.secondary};
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${colors.text.span};
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
  color: ${colors.text.span};
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};

  &:hover {
    color: ${(props) =>
      props.clickable ? colors.brand.pure : colors.text.span};
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${colors.feedback.error};
`;
