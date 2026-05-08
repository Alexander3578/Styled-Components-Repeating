import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle.ts';
import {TabMenu} from './tabMenu/TabMenu.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.tsx';
import {Work} from './work/Work.tsx';
import firstImg from '../../../assets/images/first-picture.webp'
import secondImg from '../../../assets/images/second-picture.webp'
import {Container} from '../../../components/Container.ts';
import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

export type StatusType = 'all' | 'landing' | 'react' | 'spa'

const workItemsName: { name: string, status: StatusType }[] = [
    {name: 'All', status: 'all'},
    {name: 'landing page', status: 'landing'},
    {name: 'React', status: 'react'},
    {name: 'Spa', status: 'spa'}
]

const worksList = [
    {
        imgSrc: firstImg,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        imgSrc: secondImg,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2
    }
]
export const Works = () => {
    const [statusFilter, setStatusFilter] = useState<StatusType>('all')

    const filteredWorksList = statusFilter === 'all' ? worksList
        : worksList.filter(w => w.type === statusFilter)


    return (
        <StyledWorks id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={workItemsName}
                         setStatusFilter={setStatusFilter}
                         currentFilterStatus={statusFilter}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {
                            filteredWorksList ? filteredWorksList.map((work) => (
                                    <motion.div style={{maxWidth: '540px', width: '400px', flexGrow: 1 }}
                                                key={work.id}
                                                layout
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}>
                                        <Work imgSrc={work.imgSrc}
                                              title={work.title}
                                              text={work.text}
                                              key={work.id}/>
                                    </motion.div>
                                )
                            ) : <div>No works</div>
                        }
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  position: relative;
  height: fit-content;

  ${FlexWrapper} {
    gap: 30px
  }
`