import { useSelector } from "react-redux";
import styled from "styled-components";
import CardTicker from "./CardTicker";
import CardHolding from "./CardHolding";

export default function Holding() {
    const ops = useSelector( state => state?.operations.operations );
    const hol = useSelector( state => state?.holdings.holdings );
    return (
        <Container>
            {ops && ops.map( t => <CardTicker ticker={t} /> )}
            ---------------------------------------------------------
            {hol && hol.map( t => <CardHolding ticker={t} /> )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 50vw;
`;