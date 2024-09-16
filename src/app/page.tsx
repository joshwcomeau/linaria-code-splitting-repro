import { styled } from '@linaria/react';

import Button from '@/components/Button';

export default function Home() {
  return (
    <HomeWrapper>
      Homepage
      <Button>Magenta Button</Button>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background: dodgerblue;
`;
