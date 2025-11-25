import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

// Stories interativas com useState
export const Default = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Nome"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite seu nome"
    />
  );
};

export const WithError = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Email"
      type="email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      error="Email inválido"
      placeholder="seu@email.com"
    />
  );
};

export const Password = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Senha"
      type="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="••••••••"
    />
  );
};

export const Disabled = () => {
  return (
    <Input
      label="Campo desabilitado"
      value="Valor fixo"
      onChange={() => {}}
      disabled
    />
  );
};

export const FullWidth = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Input Full Width"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      fullWidth
      placeholder="Ocupa 100% da largura"
    />
  );
};

export const WithIconLeft = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Buscar"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Buscar..."
      icon={<span>🔍</span>}
      iconPosition="left"
    />
  );
};

export const WithIconRight = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      label="Senha"
      type="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite sua senha"
      icon={<span>👁️</span>}
      iconPosition="right"
    />
  );
};

export const WithClickableIcon = () => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      label="Senha com toggle"
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite sua senha"
      icon={<span>{showPassword ? "👁️" : "👁️‍🗨️"}</span>}
      iconPosition="right"
      onIconClick={() => setShowPassword(!showPassword)}
    />
  );
};
