import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles.ts'
import {Slide} from './slide/Slide.tsx';
import './../../styles/slider.css'

const slidesList = [
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
        author={'@alex alexandrov'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
        author={'@ivan ivanow'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing'}
        author={'@max verstapen'}/>,
];

export const Carousel = () => (
    <S.StyledSlider>
        <AliceCarousel
            mouseTracking
            items={slidesList}
        />
    </S.StyledSlider>
);

