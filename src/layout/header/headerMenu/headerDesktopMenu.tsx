import styled from 'styled-components';
import {theme} from '../../../styles/Theme.ts';

export const HeaderDesktopMenu = ({items}: { items: string[] }) => {
    return (
        <StyledHeaderMenu>
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
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 15px;
    list-style: none;
  }
  
  @media ${theme.media.tablet} {
    display: none;
  }
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


