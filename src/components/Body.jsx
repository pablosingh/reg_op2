import styled from 'styled-components';
import AddOp from './AddOp';
import Holding from './Holding';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadHoldingsFromDB, loadUserId } from '../redux/holdings/actions';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

export default function Body () {
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const initUser = async (user) => {
        try {
            await fetch('http://localhost:3001/userbyemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Otros encabezados necesarios según la API (por ejemplo, tokens de autorización)
                },
                mode: 'cors', // Modo CORS
                body: JSON.stringify({
                    email: user.email
                })
            })
            .then( js => js.json() )
            .then( res => console.log(res) )
            .catch( e => console.error(e) );
        } catch (error) {
            console.error(error);
        };
    };
    useEffect ( ()=> {
        // initUser(user);
        // console.log("body")
        if(user.email)
            dispatch(loadUserId(user.email));
        dispatch(loadHoldingsFromDB());
    }, [user]);
    return (
        <Container>
            <Profile/>
            <AddOp/>
            <Holding/>
        </Container>
    );
};

const Container = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    justify-content: center;
    padding: 0em 0em;
    margin: 0em;
`;