import styled from 'styled-components';
import {theme} from '../../../../styles/Theme.ts';
import {Link} from 'react-scroll';

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
`

const StyledLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;

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

  &:hover, &.active {
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

export const S = {
    Mask,
    ListItem,
    StyledLink
}