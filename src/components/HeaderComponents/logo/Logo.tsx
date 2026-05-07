import {Icon} from '../../icon/Icon.tsx';
import {animateScroll as scroll} from 'react-scroll';

export const Logo = () => {
    return (
        <a href={''} onClick={(event) => {
            event.preventDefault()
            scroll.scrollToTop()}}>
            <Icon iconId={'html'}/>
        </a>
    );
};

