import React from 'react';
import { styled } from '@linaria/react';

function Button({ children }: { children: React.ReactNode }) {
  return <Btn>{children}</Btn>;
}

const Btn = styled.button`
  --css-file: button;
  color: magenta;
`;

export default Button;
