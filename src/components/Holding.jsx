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
    min-width: 50vw;
`;