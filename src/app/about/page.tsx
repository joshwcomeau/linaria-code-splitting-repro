import Button from '@/components/Button';
import { styled } from '@linaria/react';

export function AboutPage() {
  return (
    <AboutWrapper>
      Hello World
      <Button>Magenta button</Button>
      <a href="/">Go to homepage</a>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  --css-file: about-page;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export default AboutPage;
