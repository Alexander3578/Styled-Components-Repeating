import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Work} from './work/Work.tsx';
import firstImg from '../../../assets/images/first-picture.webp'
import secondImg from '../../../assets/images/second-picture.webp'
import {Container} from '../../../components/Container.ts';

const worksNavList = ['All', 'landing page', 'React', 'Spa']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={worksNavList} />
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work imgSrc={firstImg}
                          title={'Social Network'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work imgSrc={secondImg}
                          title={'Timer'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`