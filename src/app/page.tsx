import { styled } from '@linaria/react';

import Button from '@/components/Button';

export default function Home() {
  return (
    <HomeWrapper>
      Homepage
      <Button>Magenta Button</Button>
      <a href="/about">Go to about page</a>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  --css-file: homepage;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;
