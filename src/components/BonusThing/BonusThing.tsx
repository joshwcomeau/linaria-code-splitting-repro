import React from 'react';
import { styled } from '@linaria/react';

function BonusThing() {
  return <Wrapper>What</Wrapper>;
}

const Wrapper = styled.div`
  --css-file: BonusThing;
  color: red;
`;

export default BonusThing;
