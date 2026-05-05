import photo from '../../../assets/images/photo.webp'
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Container} from '../../../components/Container.ts';
import {S} from './Main_Styles.ts'

export const Main = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'}>
                    <S.TextContentWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.MainName>
                            I am <span>Stasyuk Alexander</span>
                        </S.MainName>
                        <S.MainTitle>A Frontend Developer</S.MainTitle>
                    </S.TextContentWrapper>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Author Photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};





