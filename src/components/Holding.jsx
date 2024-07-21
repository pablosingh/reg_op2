import { useSelector } from "react-redux";
import styled from "styled-components";
import CardTicker from "./CardTicker";

export default function Holding() {
    const state = useSelector( state => state?.operations.operations );
    return (
        <Container>
            {state && state.map( t => <CardTicker ticker={t} /> )}
            {/* <button onClick={()=>console.log(state)}>state</button> */}
            ---------------------------------------------------------
            {state && state.map( t => <CardTicker ticker={t} /> )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 50vw;
`;