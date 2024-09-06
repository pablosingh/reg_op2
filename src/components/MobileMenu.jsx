import React, { useState } from 'react';
import styled from "styled-components";
import { tertiaryColor, tertiaryHoverColor } from "../styles/colors";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
    const [ openMenu, setOpenMenu ] = useState(false);
    return (
        <>
            { openMenu ? 
            <MenuContainer>
                <MobileBtn onClick={()=> setOpenMenu(!openMenu)}>
                    <MenuRoundedIcon/>
                </MobileBtn>
                <DivFlex>
                    <Link to="/" className="link_btn" onClick={()=> setOpenMenu(!openMenu)}>Tenencias</Link>
                    <Link to="/addop" className="link_btn" onClick={()=> setOpenMenu(!openMenu)}>Crear Operacion</Link>
                    <Link to="/user" className="link_btn" onClick={()=> setOpenMenu(!openMenu)}>Usuario</Link>
                </DivFlex>
            </MenuContainer>
            : <MobileBtn onClick={()=> setOpenMenu(!openMenu)}>
                <MenuRoundedIcon/>
            </MobileBtn>}
        </>
    );
};

const MobileBtn = styled.button`
    margin: 0.1em;
    padding: 0.3em 0.5em;
    position: fixed;
    border: none;
    border-radius: 3em;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${tertiaryColor};
    transition: all .4s ease;
    &:hover{
        background-color: ${tertiaryHoverColor};
        color: black;
    }
    @media(min-width: 768px){
        display: none;
    }
`;

const MenuContainer = styled.div`
    position: fixed;
    top: 0vh;
    left: 0;
    margin: 3em 0em;
    padding: 0em 0em;

    background-color: white;

    border: 1px solid black;
    border-radius: 4px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    width: 100vw;
    // z-index: 1;
`;

const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0em;
    padding: 0em 0em 0em 0.7em;
    transition: all 0.9s ease;
    *{
        text-decoration: none;
        color: black;
    }
`;