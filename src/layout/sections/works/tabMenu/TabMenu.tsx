import styled from 'styled-components';
import {Link} from '../../../../components/Link.ts';

export const TabMenu = ({items}: {items: string[]}) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => <MenuList key={index}>
                    <Link href={'#'}>{item}</Link>
                </MenuList>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav `
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
`

const MenuList = styled.li`
  
`

