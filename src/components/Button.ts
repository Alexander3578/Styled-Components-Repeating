import styled from 'styled-components';
import {theme} from '../styles/Theme.ts';

export const Button = styled.button`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  
  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
    }
  }
  
  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: ${theme.colors.accent};
    transition: ${theme.animation.transition};

    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }
`