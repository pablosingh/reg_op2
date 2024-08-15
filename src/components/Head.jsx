import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

export default function Head () {
    const { user } = useAuth0();
    return (
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
    );
};

const Container = styled.div`
    display: flex;
    // flex-direction: column;
    background-color: rgba(220,130,17,255);
    height: 20vh;
    margin: 0em;
    padding: 0em;
    align-items: center;
    justify-content: space-around;
    // border: 2px solid #333;
    .link_btn{
        background-color: rgba(8,108,9,1);
        color: white;
        border-radius: 1em;
        padding: 0.2em 1em;
        margin: 0.3em;
        transition: all .4s ease;
        text-decoration: none;
        &:hover{
            background-color: rgba(8,108,9,0.5);
            color: black;
        }
    }
`;

const Sector = styled.div`
    display: flex;
    // flex-direction: column;
    background-color: rgba(220,130,17,255);
    height: 20vh;
    margin: 0em;
    padding: 0em;
    align-items: center;
    justify-content: center;
    .img_class{
    //   width: 15vw;
      border-radius: 50%;
    }
`;