import React, {Fragment, useState} from "react";
import { HeaderContainer, Logado, LogoSistema, LogOut, Profile, Toogle, UserName } from "./styled";
import logo from "../../img/logo.svg";

const Header = ({changeStateMenu}) => {

    const[showMenu, setShowMenu] = useState(false);

    const showMenuBar = _ => {
        //console.log(showMenu);
        setShowMenu(!showMenu);
        changeStateMenu(showMenu);
    }

    return (
    <Fragment>
        <HeaderContainer sidebar={showMenu}>
            <LogoSistema>
                <img src={logo} width="150px" height="50px"></img>
            </LogoSistema>
            <Toogle onClick={()=> showMenuBar()}/>
            <Profile>
                <Logado></Logado>
                <UserName>EMILY COSTA</UserName>
                <LogOut/>
            </Profile>
        </HeaderContainer>
    </Fragment>
    )
}

export default Header;