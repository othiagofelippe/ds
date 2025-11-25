import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Poppins (padrão)
export const Poppins6XL: Story = {
  args: {
    children: "Typography 6XL - Poppins",
    size: "6xl",
    family: "poppins",
  },
};

export const Poppins5XL: Story = {
  args: {
    children: "Typography 5XL - Poppins",
    size: "5xl",
  },
};

export const Poppins4XL: Story = {
  args: {
    children: "Typography 4XL - Poppins",
    size: "4xl",
  },
};

export const Poppins3XL: Story = {
  args: {
    children: "Typography 3XL - Poppins",
    size: "3xl",
  },
};

export const Poppins2XL: Story = {
  args: {
    children: "Typography 2XL - Poppins",
    size: "2xl",
  },
};

export const PoppinsXL: Story = {
  args: {
    children: "Typography XL - Poppins",
    size: "xl",
  },
};

export const PoppinsLG: Story = {
  args: {
    children: "Typography LG - Poppins",
    size: "lg",
  },
};

export const PoppinsBase: Story = {
  args: {
    children: "Typography Base - Poppins",
    size: "base",
  },
};

export const PoppinsSM: Story = {
  args: {
    children: "Typography SM - Poppins",
    size: "sm",
  },
};

export const PoppinsXS: Story = {
  args: {
    children: "Typography XS - Poppins",
    size: "xs",
  },
};

// Roboto
export const Roboto6XL: Story = {
  args: {
    children: "Typography 6XL - Roboto",
    size: "6xl",
    family: "roboto",
  },
};

export const Roboto3XL: Story = {
  args: {
    children: "Typography 3XL - Roboto",
    size: "3xl",
    family: "roboto",
  },
};

export const RobotoBase: Story = {
  args: {
    children: "Typography Base - Roboto",
    size: "base",
    family: "roboto",
  },
};

export const RobotoXS: Story = {
  args: {
    children: "Typography XS - Roboto",
    size: "xs",
    family: "roboto",
  },
};

// Diferentes tags HTML
export const AsH1: Story = {
  args: {
    children: "Título H1",
    as: "h1",
    size: "4xl",
  },
};

export const AsH2: Story = {
  args: {
    children: "Título H2",
    as: "h2",
    size: "3xl",
  },
};

export const AsSpan: Story = {
  args: {
    children: "Texto inline como span",
    as: "span",
    size: "sm",
  },
};

// Showcase completo
export const AllSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Typography size="6xl">6XL - Extra Large</Typography>
    <Typography size="5xl">5XL - Very Large</Typography>
    <Typography size="4xl">4XL - Large</Typography>
    <Typography size="3xl">3XL - Medium Large</Typography>
    <Typography size="2xl">2XL - Medium</Typography>
    <Typography size="xl">XL - Small Medium</Typography>
    <Typography size="lg">LG - Large Base</Typography>
    <Typography size="base">Base - Default</Typography>
    <Typography size="sm">SM - Small</Typography>
    <Typography size="xs">XS - Extra Small</Typography>
  </div>
);
