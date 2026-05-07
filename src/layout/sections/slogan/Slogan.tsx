import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {Button} from '../../../components/Button.ts';
import {Container} from '../../../components/Container.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';

export const Slogan = () => {
    return (
        <StyledSlogan id={'slogan'}>
            <Container>
                <FlexWrapper direction={'column'}
                             align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>HIRE ME</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  ${Container} {
    min-height: 30vh;
  }    
`