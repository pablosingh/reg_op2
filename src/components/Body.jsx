import styled from 'styled-components';
import AddOp from './AddOp';
import Holding from './Holding';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadHoldingsFromDB } from '../redux/holdings/actions';

export default function Body () {
    const dispatch = useDispatch();
    useEffect ( ()=> {
        dispatch(loadHoldingsFromDB());
    }, []);
    return (
        <Container>
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