import styled from 'styled-components';
import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Container} from '../../../components/Container.ts';
import {theme} from '../../../styles/Theme.ts';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                    <TextContentWrapper>
                        <SmallText>Hi There</SmallText>
                        <MainName>
                            I am <span>Stasyuk Alexander</span>
                        </MainName>
                        <MainTitle>A Frontend Developer</MainTitle>
                    </TextContentWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Author Photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  display: flex;
`

const TextContentWrapper = styled.div`
  text-align: left;
`

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const MainName = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;

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
  font-weight: 400;
  font-size: 27px;
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

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }

`



