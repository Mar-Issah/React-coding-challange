import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const move = keyframes`
  to { transform: translateX(-100%);
`;

export const AppBarContent = styled.span`
  display: block;
  padding: 0.5rem;
  width: 100%;
  transform: translateX(100%);
  animation: ${move} 25s linear infinite;
`;
