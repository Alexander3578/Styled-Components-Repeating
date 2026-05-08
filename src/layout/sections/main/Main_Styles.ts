import {theme} from '../../../styles/Theme.ts';
import styled from 'styled-components';
import {font} from '../../../styles/Common.ts';
import {Container} from '../../../components/Container.ts';

const StyledMain = styled.section`
    padding-top: 270px;
    ${Container} {
      min-height: 70vh;
    }
`

const TextContentWrapper = styled.div`
  text-align: left;
`

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const MainName = styled.h2`
  letter-spacing: 0.05em;
  ${font({family: '"Josefin Sans", sans-serif', weight: 700, Fmax: 50, Fmin: 36})};

  margin: 10px 0;

  span {
    white-space: nowrap;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 400, Fmax: 27, Fmin: 20})};

  max-width: 100%;
  
  p {
    display: none;
  }
`

const Photo = styled.img`
  max-width: 350px;
  max-height: 430px;
  object-fit: cover;
  margin-right: 15px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: inline-block;
    width: 290px;
    height: 430px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }

  @media screen and (max-width: 880px){
    margin-top: 65px;
  }
`

export const S = {
    MainName,
    MainTitle,
    StyledMain,
    SmallText,
    Photo,
    PhotoWrapper,
    TextContentWrapper
}