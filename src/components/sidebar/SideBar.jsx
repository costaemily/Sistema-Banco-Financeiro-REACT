import React, { Fragment } from 'react';
import { SideBarNav, SideBarWrap } from './styled';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';

const SideBar = (props) => {
    return (
        <Fragment>
            <SideBarNav sidebar={props.showMenu}>
                <SideBarWrap>
                    {
                        SideBarData.map((item, index) =>{
                            return(
                                <SubMenu
                                    page={item.page}  
                                    path={item.path}
                                    icon={item.icon}
                                    closed={item.closed}
                                    opened={item.opened}
                                    sub={item.sub}
                                    subMenu={item.subMenu}
                                    key ={index}/>
                            )
                        })
                    }
                </SideBarWrap>
            </SideBarNav>
        </Fragment>
    )
}

export default SideBar;