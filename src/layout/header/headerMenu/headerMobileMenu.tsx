import styled, {css} from 'styled-components';
import {theme} from '../../../styles/Theme.ts';
import {useState} from 'react';

export const HeaderMobileMenu = ({items}: { items: string[] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openPopupHandler = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <StyledHeaderMenu>
            <BurgerButton isOpen={isOpen} onClick={openPopupHandler}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={isOpen}>
                <ul>
                    {items.map((item, index) =>
                        <ListItem key={index}>
                            <StyledLink href={'#'}>
                                {item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </StyledLink>
                        </ListItem>)}
                </ul>
            </MobileMenuPopup>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};

    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(0, 0, 0, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(31, 31, 32, 0.9);
  z-index: 9999;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.accent};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const ListItem = styled.li`
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      color: ${theme.colors.font};
      transform: skew(12deg) translateX(5px);

      & + ${Mask} {
        transform: skew(12deg) translateX(-5px);
      }
    }
  }
`

const StyledLink = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`


