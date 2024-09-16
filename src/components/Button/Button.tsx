import React from 'react';
import { styled } from '@linaria/react';

function Button({ children }: { children: React.ReactNode }) {
  return <Btn>{children}</Btn>;
}

const Btn = styled.button`
  color: magenta;
`;

export default Button;
