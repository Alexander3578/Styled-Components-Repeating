import {Icon} from '../icon/Icon.tsx';
import styled from 'styled-components';
import {animateScroll as scroll} from 'react-scroll'
import {useEffect, useState} from 'react';

export const GoTopBtn = () => {
        const [showArrow, setShowArrow] = useState(false)

        useEffect(() => {
            const scrollHandler = () => {
                setShowArrow(window.scrollY > 200)
            }

            window.addEventListener('scroll', scrollHandler)

            return () => {
                window.removeEventListener('scroll', scrollHandler)
            }
        }, [])

        return (
            <>
                {showArrow && <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
                    <Icon iconId={'arrowTop'} width={'16'} height={'15'} viewBox={'0 0 16 15'}/>
                </StyledGoTopBtn>}
            </>
        );
    }
;

const StyledGoTopBtn = styled.button`
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 30px;
  right: 30px;
`
