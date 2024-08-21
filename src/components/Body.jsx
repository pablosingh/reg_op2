 import styled from 'styled-components';
import AddOp from './AddOp';
import Holding from './Holding';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHoldingsFromDB, loadUserId } from '../redux/holdings/actions';
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Head from './Head';
import { Route, Routes } from 'react-router-dom';

export default function Body () {
    const dispatch = useDispatch();
    const { user } = useAuth0();
    // const state = useSelector( state => state );
    // const initUser = async (user) => {
    //     try {
    //         await fetch('http://localhost:3001/userbyemail', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 // Otros encabezados necesarios según la API (por ejemplo, tokens de autorización)
    //             },
    //             mode: 'cors', // Modo CORS
    //             body: JSON.stringify({
    //                 email: user.email
    //             })
    //         })
    //         .then( js => js.json() )
    //         .then( res => console.log(res) )
    //         .catch( e => console.error(e) );
    //     } catch (error) {
    //         console.error(error);
    //     };
    // };
    useEffect ( ()=> {
        dispatch(loadUserId(user))
    }, []);
    return (
        <Container>
            <Head/>
            <Routes>
                <Route path='/' element={ <Holding/> } />
                <Route path='/user' element={ <Profile/> } />
                <Route path='/addop' element={ <AddOp/> } />
            </Routes>
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    flex-wrap: wrap;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    justify-content: center;
    padding: 0em 0em;
    margin: 0em;
`;