import {useState} from 'react';
import {CommonMenu} from '../commonMenu/CommonMenu.tsx';
import {S} from './HeaderMobileMenu_Styles.ts'

export const HeaderMobileMenu = ({items}: { items: string[] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openPopupHandler = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <S.StyledHeaderMenu>
            <S.BurgerButton isOpen={isOpen} onClick={openPopupHandler}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={isOpen}>
                <CommonMenu items={items}/>
            </S.MobileMenuPopup>
        </S.StyledHeaderMenu>
    );
};







