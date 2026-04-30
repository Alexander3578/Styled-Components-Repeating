import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';

type SkillPropsType = {
    iconId: string
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    const {iconId, text, title} = props;
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
  max-width: 380px;
  padding: 62px 20px 40px;
`

export const IconWrapper = styled.div`
  position: relative;
  
  &::before{
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  text-transform: uppercase;

  margin: 70px 0 15px;
`

const SkillText = styled.p`
  text-align: center;
`