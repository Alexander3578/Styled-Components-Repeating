import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Container} from '../../../components/Container.ts';
import {S} from './Main_Styles.ts'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'

export const Main = () => {
    return (
        <S.StyledMain id={'main'}>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                    <S.TextContentWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.MainName>
                            I am <span>Stasyuk Alexander</span>
                        </S.MainName>
                        <S.MainTitle>
                            <p>A Frontend Developer</p>
                            <Typewriter options={{
                                strings: ['A Frontend Developer', 'A Web Developer', 'A NodeJS Developer'],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10
                            }}/>
                        </S.MainTitle>
                    </S.TextContentWrapper>
                    <Tilt className={'parallax-effect.img'}
                          tiltMaxAngleX={40}
                          tiltMaxAngleY={40}
                          perspective={800}
                          transitionSpeed={1500}
                          scale={1.1}
                          gyroscope={true}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="Author Photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};





