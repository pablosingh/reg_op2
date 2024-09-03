import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { primaryColor, tertiaryColor, tertiaryHoverColor } from "../styles/colors";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function Head () {
    const { user } = useAuth0();
    return (
    <>
        <MobileBtn><MenuRoundedIcon/></MobileBtn>
        <Container>
            <Sector>
                <img src={user.picture} alt={user.name} className="img_class" />
            </Sector>
            <Sector>
                <Link to="/" className="link_btn">Tenencias</Link>
                <Link to="/addop" className="link_btn">Crear Operacion</Link>
                <Link to="/user" className="link_btn">Usuario</Link>
            </Sector>
            <Sector>
                <LogoutButton/>
            </Sector>
        </Container>
    </>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 20vh;
    margin: 0em;
    padding: 0em;
    background-color: ${primaryColor};
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 768px){
        display: none;
    }
    .link_btn{
        background-color: ${tertiaryColor};
        color: white;
        border-radius: 1em;
        padding: 0.2em 1em;
        margin: 0.3em;
        transition: all .4s ease;
        text-decoration: none;
        &:hover{
            background-color: ${tertiaryHoverColor};
            color: black;
        }
    }
`;

const Sector = styled.div`
    display: flex;
    height: 20vh;
    margin: 0em;
    padding: 0em;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
        display: none;
    }
    .img_class{
      border-radius: 50%;
    }
`;

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