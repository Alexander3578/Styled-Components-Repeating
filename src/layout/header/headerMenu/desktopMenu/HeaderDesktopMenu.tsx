import {CommonMenu} from '../commonMenu/CommonMenu.tsx';
import {S} from './HeaderDesktopMenu_Styles.ts'

export const HeaderDesktopMenu = ({items}: { items: string[] }) => {
    return (
        <S.StyledHeaderMenu>
            <CommonMenu items={items}/>
        </S.StyledHeaderMenu>
    );
};








