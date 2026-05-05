import {S} from './CommonMenu_Styles.ts'

export const CommonMenu = ({items}: { items: string[] }) => {
    return (
        <ul>
            {items.map((item, index) =>
                <S.ListItem key={index}>
                    <S.StyledLink href={'#'}>
                        {item}
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item}</span>
                        </S.Mask>
                    </S.StyledLink>
                </S.ListItem>)}
        </ul>
    );
};

