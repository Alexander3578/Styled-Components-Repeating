import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {Icon} from '../../components/icon/Icon.tsx';
import {S} from './Footer_Styles.ts'

const socialMediaList = ['instagram', 'telegram', 'vk', 'linkedin']

export const Footer = () => {
    return (
        <S.StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Alexander</S.Name>
                <S.StyledList>
                    {socialMediaList.map(social => {
                        return <S.StyledItem>
                            <S.StyledLink>
                                <Icon width={'21px'}
                                      height={'21px'}
                                      viewBox={'0 0 21 21'}
                                      iconId={social}/>
                            </S.StyledLink>
                        </S.StyledItem>
                    })}
                </S.StyledList>
                <S.Copyright>
                    © 2026 Alexander Stasyuk, All Rights Reserved.
                </S.Copyright>
            </FlexWrapper>
        </S.StyledFooter>
    );
};


