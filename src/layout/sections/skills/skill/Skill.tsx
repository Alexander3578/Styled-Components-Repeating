import {Icon} from '../../../../components/icon/Icon.tsx';
import {FlexWrapper} from '../../../../components/FlexWrapper.tsx';
import {S} from './Skill_Styles.ts'
import {IconWrapper} from '../../../../components/icon/IconWrapper.ts';

type SkillPropsType = {
    iconId: string
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    const {iconId, text, title} = props;
    return (
        <S.StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={iconId}/>
                </IconWrapper>
                <S.SkillTitle>{title}</S.SkillTitle>
                <S.SkillText>{text}</S.SkillText>
            </FlexWrapper>
        </S.StyledSkill>
    )
}

