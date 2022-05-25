import React, {children, Fragment, useState} from 'react';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';
import Content from '../content/Content';

const Layout = ({children}) => {

    const [showMenu, setShowMenu] = useState(false);

    const setChangeStateMenu = (show) => {
        setShowMenu(show)
    }
    return (
        <Fragment>
            <header>
                <Header changeStateMenu={setChangeStateMenu}/>
            </header>
            <aside>
                <SideBar showMenu={showMenu}/>
            </aside>
            <main>
                <Content showMenu={showMenu}>
                    {children}
                </Content>
            </main>
        </Fragment>
    )
}

export default Layout;