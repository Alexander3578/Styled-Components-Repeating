import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {Carousel} from '../../../components/slider/Slider.tsx';
import {Container} from '../../../components/Container.ts';
import {IconWrapper} from '../../../components/icon/IconWrapper.ts';

export const Testimony = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>
                    <Carousel />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  ${Container} {
    min-height: 50vh;
  }
  
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`

