import Button from '@/components/Button';
import { styled } from '@linaria/react';

function AboutPage() {
  return (
    <AboutWrapper>
      Hello World
      <br />
      <Button>Magenta button</Button>
      <br />
      <a href="/">Go to homepage</a>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  --css-file: about-page;
`;

export default AboutPage;
