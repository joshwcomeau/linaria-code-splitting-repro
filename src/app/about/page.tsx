import Button from '@/components/Button';
import { styled } from '@linaria/react';

export function AboutPage() {
  return (
    <AboutWrapper>
      Hello World
      <Button>Magenta button</Button>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  background: peachpuff;
`;

export default AboutPage;
