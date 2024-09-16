import { styled } from '@linaria/react';

import Button from '@/components/Button';
import BonusThing from '@/components/BonusThing';

export default function Home() {
  return (
    <HomeWrapper>
      Homepage
      <br />
      <Button>Magenta Button</Button>
      <br />
      <a href="/about">Go to about page</a>
      <br />
      <BonusThing />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  --css-file: homepage;
`;
