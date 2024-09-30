import { useSelector } from "react-redux";
import styled from "styled-components";
import CardHolding from "./CardHolding";
import { LOAD_TOTAL_INVESTED_CAPITAL } from '../redux/holdings/actions';
import Total from './Total';
// import { useDispatch } from "react-redux";

export default function Holding() {
    const hol = useSelector( state => state?.holdings.holdings );
    const state = useSelector( state => state );
    // const dispatch = useDispatch();
    return (
        <Container>
            {/* <Btn onClick={()=> console.log(state)}>Estado</Btn> */}
            {/* <Btn onClick={()=> dispatch({ type: LOAD_TOTAL_INVESTED_CAPITAL, payload: null })}>calculate</Btn> */}
            {/* <Btn onClick={()=> console.log(process.env.REACT_APP_API_URL)}>URL</Btn> */}
            {hol && hol.map( t => <CardHolding ticker={t} key={t.id}/> )}
            <Total/>
        </Container>
    );
};

const Container = styled.div`
    // position: fixed;
    top: 20vh;
    right: 0;
    width: 100vw;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    min-height: 80vh;
    padding: 0em 0em;
    margin: 0em 0em;
`;

const Btn = styled.button`
    background-color: rgba(8,108,9,1);
    color: white;
    border-radius: 1em;
    padding: 0.2em 1em;
    margin: 1em;
    transition: all .4s ease;
    &:hover{
        background-color: rgba(8,108,9,0.5);
        color: black;
    }
`;