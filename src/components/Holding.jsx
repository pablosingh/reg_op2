import { useSelector } from "react-redux";
import styled from "styled-components";
import CardHolding from "./CardHolding";

export default function Holding() {
    const hol = useSelector( state => state?.holdings.holdings );
    return (
        <Container>
            {hol && hol.map( t => <CardHolding ticker={t} key={t.id}/> )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    min-width: 50vw;
    padding: 0.9em 0em;
    margin: 0em;
`;