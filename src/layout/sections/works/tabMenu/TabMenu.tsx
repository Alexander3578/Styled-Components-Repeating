import styled from 'styled-components';
import {Link} from '../../../../components/Link.ts';
import {StatusType} from '../Works.tsx';

type TabMenuItems = {
    name: string
    status: StatusType
}

type TabMenuPropsType = {
    items: TabMenuItems[]
    setStatusFilter: (statusFilter: StatusType) => void
    currentFilterStatus: StatusType
}


export const TabMenu = ({items, setStatusFilter, currentFilterStatus}: TabMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item, index) => <MenuList key={index}>
                    <Link as={'button'}
                          active={currentFilterStatus === item.status}
                          onClick={() => {
                              setStatusFilter(item.status)
                          }
                          }>{item.name}</Link>
                </MenuList>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    max-width: 352px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0 auto 40px;
  }
`

const MenuList = styled.li`

`

