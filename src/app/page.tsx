"use client";

import { Avatar, Button, Card, Input } from "@/components";
import { useState } from "react";
import {
  Main,
  Title,
  Section,
  SectionTitle,
  ButtonGroup,
  InputGroup,
  AvatarGroup,
  CardGrid,
  CardContent,
  CardTitle,
  CardText,
  ProfileCard,
  ProfileInfo,
  ProfileName,
  ProfileRole,
} from "./page.styles";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Main>
      <Title>Meu Design System</Title>

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <ButtonGroup>
          <Button onClick={() => alert("Primary")}>Primary</Button>
          <Button variant="secondary" onClick={() => {}}>
            Secondary
          </Button>
          <Button variant="outline" onClick={() => {}}>
            Outline
          </Button>
          <Button disabled onClick={() => {}}>
            Disabled
          </Button>
          <Button loading onClick={() => {}}>
            Loading
          </Button>
          <Button icon={<span>💾</span>} onClick={() => {}}>
            Com Ícone
          </Button>
        </ButtonGroup>
      </Section>

      <Section>
        <SectionTitle>Inputs</SectionTitle>
        <InputGroup>
          <Input
            label="Nome"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Digite seu nome"
          />
          <Input
            label="Email com erro"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error="Email inválido"
            placeholder="seu@email.com"
          />
          <Input
            label="Com ícone"
            value=""
            onChange={() => {}}
            placeholder="Buscar..."
            icon={<span>🔍</span>}
            iconPosition="left"
          />
        </InputGroup>
      </Section>

      <Section>
        <SectionTitle>Avatars</SectionTitle>
        <AvatarGroup>
          <Avatar name="John Doe" size="sm" />
          <Avatar name="Jane Smith" />
          <Avatar name="Bob Johnson" size="lg" />
          <Avatar name="Alice Brown" src="https://i.pravatar.cc/150?img=5" />
        </AvatarGroup>
      </Section>

      <Section>
        <SectionTitle>Cards</SectionTitle>
        <CardGrid>
          <Card>
            <CardTitle>Card Simples</CardTitle>
            <CardText>Conteúdo do card.</CardText>
          </Card>

          <Card>
            <ProfileCard>
              <Avatar name="John Doe" src="https://i.pravatar.cc/150?img=1" />
              <ProfileInfo>
                <ProfileName>John Doe</ProfileName>
                <ProfileRole>Developer</ProfileRole>
              </ProfileInfo>
            </ProfileCard>
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Card com Ação</CardTitle>
              <CardText>Este card tem um botão.</CardText>
              <Button onClick={() => alert("Clicou!")} fullWidth>
                Clique aqui
              </Button>
            </CardContent>
          </Card>
        </CardGrid>
      </Section>
    </Main>
  );
}
