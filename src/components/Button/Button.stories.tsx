import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Botão Primary",
    onClick: () => alert("Clicou!"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Botão Secondary",
    variant: "secondary",
    onClick: () => {},
  },
};

export const Outline: Story = {
  args: {
    children: "Botão Outline",
    variant: "outline",
    onClick: () => {},
  },
};

export const Small: Story = {
  args: {
    children: "Botão Small",
    size: "sm",
    onClick: () => {},
  },
};

export const Large: Story = {
  args: {
    children: "Botão Large",
    size: "lg",
    onClick: () => {},
  },
};

export const Disabled: Story = {
  args: {
    children: "Botão Disabled",
    disabled: true,
    onClick: () => {},
  },
};

export const Loading: Story = {
  args: {
    children: "Botão Loading",
    loading: true,
    onClick: () => {},
  },
};

export const FullWidth: Story = {
  args: {
    children: "Botão Full Width",
    fullWidth: true,
    onClick: () => {},
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "Salvar",
    icon: <span>💾</span>,
    iconPosition: "left",
    onClick: () => {},
  },
};

export const WithIconRight: Story = {
  args: {
    children: "Enviar",
    icon: <span>📤</span>,
    iconPosition: "right",
    onClick: () => {},
  },
};
