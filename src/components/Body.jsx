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
import { secondaryColor } from '../styles/colors';
import image from '../images/bitcoin.jpg';

export default function Body () {
    const dispatch = useDispatch();
    const { user } = useAuth0();
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
    position: relative;
    top: 20vh;
    right: 0;
    width: 100vw;
    min-height: 80vh;
    padding: 0em 0em;
    margin: 0em 0em;
    // background-color: ${secondaryColor};
    @media(max-width: 768px){
        // position: relative;
        top: 0vh;
    }
    &::before{
        content: '';
        position: fixed;
        top: 0vh;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        background-repeat: repeat-y;
        background: url(${image});
        opacity: 0.9;
        z-index: -1;
    }
`;