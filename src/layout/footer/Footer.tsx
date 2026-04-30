import styled from 'styled-components';
import {FlexWrapper} from '../../components/FlexWrapper.tsx';
import {Icon} from '../../components/icon/Icon.tsx';
import {theme} from '../../styles/Theme.ts';

const socialMediaList = ['instagram', 'telegram', 'vk', 'linkedin']

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Alexander</Name>
                <StyledList>
                    {socialMediaList.map(social => {
                        return <StyledItem>
                            <StyledLink>
                                <Icon width={'21px'}
                                      height={'21px'}
                                      viewBox={'0 0 21 21'}
                                      iconId={social}/>
                            </StyledLink>
                        </StyledItem>
                    })}
                </StyledList>
                <Copyright>
                    © 2026 Alexander Stasyuk, All Rights Reserved.
                </Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 3px;
`

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const StyledItem = styled.li`

`

const StyledLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.secondaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: .5;
`
