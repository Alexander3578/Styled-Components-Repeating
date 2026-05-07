import {S} from './CommonMenu_Styles.ts'

const headerNavList = [
    {title: 'Home', id: 'main'},
    {title: 'Skills', id: 'skills'},
    {title: 'Works', id: 'works'},
    {title: 'Testimony', id: 'testimony'},
    {title: 'Contact', id: 'contact'}
]

export const CommonMenu = () => {
    return (
        <ul>
            {headerNavList.map((item, index) =>
                <S.ListItem key={index}>
                    <S.StyledLink to={item.id}
                                  smooth={true}
                                  activeClass={'active'}
                                  spy={true}
                                  offset={-10}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.StyledLink>
                </S.ListItem>)}
        </ul>
    );
};

