import styled from "styled-components";

export const NavbarStyle = styled.div`
    .navbar-section{
        padding: 1%;
        border-bottom: 1px solid lightgray;
    }
    .navbar{
        background-color: white;
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: auto;
        align-items: center;
    }
    .navbar .logo-section{
        font-size: 1rem;
    }
    .links ul{
        list-style: none;
        display: flex;
    }
    .links ul li{
        margin-right: 12%;
    }
    .links ul li a{
        color: black;
        text-decoration: none;
        font-size: 1.1rem;
    }
`;