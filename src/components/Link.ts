import styled, {css} from 'styled-components';
import {theme} from '../styles/Theme.ts';

export const Link = styled.a<{ active?: boolean }>`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    background-color: ${theme.colors.accent};
    height: 10px;

    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;

    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  ${props => props.active && css<{ active?: boolean }>`
    &::before{
      transform: scaleX(1);
    }  
  `
  }
`