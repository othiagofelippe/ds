import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Input } from "../Input";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3>Título do Card</h3>
        <p>Este é o conteúdo do card.</p>
      </div>
    ),
  },
};

export const WithButton: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3>Card com Botão</h3>
        <p>Este card contém um botão de ação.</p>
        <Button onClick={() => alert("Clicou!")}>Clique aqui</Button>
      </div>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    children: (
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Avatar
          name="John Doe"
          src="https://i.pravatar.cc/150?img=1"
          size="lg"
        />
        <div>
          <h3 style={{ margin: "0 0 8px 0" }}>John Doe</h3>
          <p style={{ margin: 0, color: "#7C7C8A" }}>Desenvolvedor Frontend</p>
        </div>
      </div>
    ),
  },
};

export const FormCard: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>Login</h3>
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value=""
          onChange={() => {}}
          fullWidth
        />
        <Input
          label="Senha"
          type="password"
          placeholder="••••••••"
          value=""
          onChange={() => {}}
          fullWidth
        />
        <Button fullWidth onClick={() => alert("Login!")}>
          Entrar
        </Button>
      </div>
    ),
  },
};
