import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Icon} from '../../../components/icon/Icon.tsx';
import {Slider} from '../../../components/slider/Slider.tsx';
import {IconWrapper} from '../skills/skill/Skill.tsx';

export const Testimony = () => {
    return (
        <StyledTestimony>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`

