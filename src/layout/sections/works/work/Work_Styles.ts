import styled from 'styled-components';
import {Button} from '../../../../components/Button.ts';
import {theme} from '../../../../styles/Theme.ts';
import {Link} from '../../../../components/Link.ts';

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  //width: 330px;
  //flex-grow: 1;
  
  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
  
  // @media ${theme.media.desktop} {
  //   max-width: 540px;
  // }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      opacity: 1;
    }
    
    ${Button} {
      opacity: 1;
    }
  }

  &::before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: ${theme.animation.transition};
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: ${theme.animation.transition};
    
    &::before{
      width: 100%;
      height: 100%;
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
`

const Text = styled.p`
  margin: 14px 0 10px;
`

export const S = {
    StyledWork,
    Image,
    ImageWrapper,
    Title,
    Text,
    Description
}