import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Skill} from './skill/Skill.tsx';
import {Container} from '../../../components/Container.ts';
import {Fade} from 'react-awesome-reveal';

const skillsData = [
    {
        iconId: 'html',
        title: 'HTML',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'CSS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'REACT',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'ts',
        title: 'TYPESCRIPT',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styled-component',
        title: 'STYLED-COMPONENT',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'design',
        title: 'WEB DESIGN',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]

export const Skills = () => {
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-evenly'}>
                    <Fade cascade={true}
                          damping={0.15}>
                    {skillsData.map(skill => <Skill key={skill.iconId}
                                                    iconId={skill.iconId}
                                                    title={skill.title}
                                                    text={skill.text}/>)}
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
`

