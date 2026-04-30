import styled from 'styled-components';
import {Link} from '../../../../components/Link.ts';
import {theme} from '../../../../styles/Theme.ts';
import {Button} from '../../../../components/Button.ts';

type WorkPropsType = {
    imgSrc: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    const {imgSrc, text, title} = props

    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={imgSrc}/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }
    
    ${Button} {
      opacity: 1;
    }
  }
  
  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    &::before{
      width: 100%;
      height: 100%;
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
