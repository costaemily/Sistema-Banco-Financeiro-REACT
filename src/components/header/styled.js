import styled from "styled-components";

export const HeaderContainer = styled.div `
    background-color: #fff;//#198754
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    //justify-content: space-around;
    z-index: 99;
    //padding: 13px;
    padding-right: 15px;
    margin-left: ${({sidebar}) => (sidebar ? '250' : '0')};
`;
export const LogoSistema = styled.div`
    -webkit-box-flex: 1;
    -ms-fex: 1 0 auto;
    color: #000000;
    text-align: center;
    font-family: 'Niconne';
    //padding: 0 13px;
    //padding-left: 15px;
    font-size: 26px;
    font-weight: 400;
    line-height: 50px;

    &focus{
        text-decoration: none;
        color: #fff;
    }

    &hover{
        text-decoration: none;
        color: #fff;
    }

    @media(min-width: 768px){
        -webkit-box-flex: 0;
        -ms-fex: 0 0 auto;
        flex: 0 0 auto;
        display: block;
        width: 250px;
        background-color: #fff;//#007d71
    }
`;
export const Toogle = styled.div`
    padding: 0 15px;
    //padding-left: 13px;
    font-family: fontAwesome;
    color: #000000;
    line-height: 2.4;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;

    &:hover, &focus{
        color: #fff;
        background-color: #000000;//#00635a
        text-decoration: none;
    }

    &:before{
        content: "\f0c9";
        font-size: 21px;
    }

    @media(max-width: 767px){
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
`;
export const Profile = styled.div`
    position: fixed;
    //padding-top: 13px;
    padding-right: 50px;
    right: 0px;
    display: flex;
    font-weight: bold;
    font-size: 18px;

    @media(min-width: 768px){
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
    }
`;
export const UserName = styled.span`
    padding-right: 30px;
`;
export const Logado = styled.span`
    padding-right: 30px;
`;
export const LogOut = styled.div`
    color: #212529;
    text-decoration: none;
`;
export const AppTitle = styled.div`
    position: relative;
    //top: 0;
    //width: max-content;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 10px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    display: flex;
    margin: 0 5% 30px;
    justify-content: space-between;

    .titulo{
        font-size: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .pesquisa{
        font-size: 20px;
        padding-left: 10px;
        text-decoration: none;
        cursor: pointer;
    }
`;