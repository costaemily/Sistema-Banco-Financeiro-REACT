import React, { Fragment, useState } from 'react';
import { SideBarLink, SideBarLabel, DropDownlink } from "./styled";

const SubMenu = ({page, path, icon, closed, opened, sub, subMenu}) =>{
    const [submenu, setSubMenu] = useState(false)
    return(
        <Fragment>
            <SideBarLink to={path} onClick={() => setSubMenu(!submenu)}>
                <div>
                    {icon}
                    <SideBarLabel>{page}</SideBarLabel>
                </div>
                <div>
                    {
                        submenu && sub
                            ? opened
                            : subMenu
                            ? closed
                            : null
                    }
                </div>
            </SideBarLink>
            {
                submenu && sub &&(
                    subMenu.map((item, index) =>{
                        return(
                            <DropDownlink to={item.path} key={index}>
                                {item.icon}
                                <SideBarLabel>{item.page}</SideBarLabel>
                            </DropDownlink>
                        )
                    })
                )
            }
        </Fragment>
    )
}

export default SubMenu;