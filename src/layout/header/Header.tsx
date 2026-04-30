import styled from 'styled-components';
import {Logo} from '../../components/HeaderComponents/logo/Logo.tsx';
import {Container} from '../../components/Container.ts';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {HeaderDesktopMenu} from './headerMenu/headerDesktopMenu.tsx';
import {HeaderMobileMenu} from './headerMenu/headerMobileMenu.tsx';

const headerNavList = ['Hone', 'Skills', 'Works', 'Testimony', 'Contact']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderDesktopMenu items={headerNavList}/>
                    <HeaderMobileMenu items={headerNavList}/>
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

