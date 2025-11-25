import styled from "@emotion/styled";
import { colors, spacing } from "@/tokens";

export const Main = styled.main`
  padding: ${spacing[10]}px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${colors.text.headline};
  font-size: 32px;
  margin: 0;
`;

export const Section = styled.section`
  margin-top: ${spacing[10]}px;
`;

export const SectionTitle = styled.h2`
  color: ${colors.text.heading};
  font-size: 24px;
  margin: 0 0 ${spacing[4]}px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing[4]}px;
  margin-top: ${spacing[4]}px;
  flex-wrap: wrap;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: ${spacing[6]}px;
  margin-top: ${spacing[4]}px;
  flex-wrap: wrap;
`;

export const AvatarGroup = styled.div`
  display: flex;
  gap: ${spacing[4]}px;
  align-items: center;
  margin-top: ${spacing[4]}px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing[6]}px;
  margin-top: ${spacing[4]}px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[4]}px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 ${spacing[2]}px 0;
  color: ${colors.text.heading};
`;

export const CardText = styled.p`
  margin: 0;
  color: ${colors.text.body};
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing[4]}px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.h4`
  margin: 0 0 ${spacing[1]}px 0;
  color: ${colors.text.heading};
`;

export const ProfileRole = styled.p`
  margin: 0;
  color: ${colors.text.span};
  font-size: 14px;
`;
