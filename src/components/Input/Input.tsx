"use client";

import {
  Container,
  ErrorText,
  IconContainer,
  InputWrapper,
  Label,
  StyledInput,
} from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({
  label,
  error,
  fullWidth = false,
  icon,
  iconPosition = "right",
  onIconClick,
  ...props
}: InputProps) => {
  const hasIcon = !!icon;
  const iconClickable = !!onIconClick;

  return (
    <Container fullWidth={fullWidth}>
      <Label>{label}</Label>
      <InputWrapper>
        <StyledInput
          {...props}
          hasError={!!error}
          hasIcon={hasIcon}
          iconPosition={iconPosition}
        />
        {icon && (
          <IconContainer
            position={iconPosition}
            clickable={iconClickable}
            onClick={onIconClick}
          >
            {icon}
          </IconContainer>
        )}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
