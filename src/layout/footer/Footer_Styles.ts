import styled from 'styled-components';
import {theme} from '../../styles/Theme.ts';
import {font} from '../../styles/Common.ts';

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  letter-spacing: 3px;
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 22, Fmin: 16})}
`

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const StyledItem = styled.li`

`

const StyledLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  transition: ${theme.animation.transition};
  
  &:hover {
    color: ${theme.colors.secondaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: .5;
`

export const S = {
    StyledFooter,
    StyledItem,
    StyledLink,
    StyledList,
    Name,
    Copyright
}