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
    // background-color: rgba(108,8,9,1);
    justify-content: center;
    padding: 0em 0em;
    margin: 0em;
`;