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

//Image grid style
export const ButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1.5rem;
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
  max-width: 21.725rem;
  margin: auto;
`;

//Modal Styles
export const ImageContainer = styled.div`
  height: 50vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
