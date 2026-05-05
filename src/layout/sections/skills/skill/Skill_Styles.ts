import styled from 'styled-components';
import {theme} from '../../../../styles/Theme.ts';

const StyledSkill = styled.div`
  max-width: 330px;
  width: 100%;
  flex-grow: 1;
  padding: 62px 20px 40px;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`

const SkillTitle = styled.h3`
  text-transform: uppercase;

  margin: 70px 0 15px;
`

const SkillText = styled.p`
  text-align: center;
`

export const S = {
    StyledSkill,
    SkillTitle,
    SkillText,
}