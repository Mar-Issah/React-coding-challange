import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Box, Toolbar, Container } from '@mui/material';
import { Card } from '@mui/material';

// Notice component styles
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

//Homepage  styles
export const Search = styled(Toolbar)`
  background-color: #fff;
  border-radius: 1.25rem;
  width: 30vw;
  min-height: 1rem !important;
  border: 0.125rem solid black;
  margin: 0.525rem 0.525rem;
`;

//Image card  styles
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
  display: flex;
  align-items: end;
  justify-content: flex-start;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const ProfileContainer = styled(Box)`
  display: flex;
  align-items: center;
  color: #fff;
`;
export const ImgCard = styled(Card)`
  position: relative;
  max-width: 345px;
  margin: auto;
`;
