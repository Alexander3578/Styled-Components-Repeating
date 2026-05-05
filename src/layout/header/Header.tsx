import styled from 'styled-components';
import {Logo} from '../../components/HeaderComponents/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {HeaderDesktopMenu} from './headerMenu/desktopMenu/HeaderDesktopMenu.tsx';
import {HeaderMobileMenu} from './headerMenu/mobileMenu/HeaderMobileMenu.tsx';
import {useEffect, useState} from 'react';

const headerNavList = ['Hone', 'Skills', 'Works', 'Testimony', 'Contact']
export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)

        return () => {window.removeEventListener('resize', handleWindowResize)}
    })

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width <= breakPoint ?  <HeaderMobileMenu items={headerNavList}/>
                        : <HeaderDesktopMenu items={headerNavList}/>}
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

export const StyledHeader = styled.header`
  background: rgba(31, 31, 32, 0.9);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  min-height: 10vh;
  
  ${Container}{
    min-height: 10vh;
  }
`

