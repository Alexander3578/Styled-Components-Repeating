import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {S} from './Contact_Styles.ts'

export const Contact = () => {
    return (
        <S.StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.StyledForm>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'address'}/>
                    <S.Field placeholder={'Comment'} as={'textarea'}/>
                    <Button type={'submit'}>
                        Send message
                    </Button>
                </S.StyledForm>
            </Container>
        </S.StyledContact>
    );
};

