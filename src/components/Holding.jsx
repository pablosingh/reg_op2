import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CardTicker from "./CardTicker";
import CardHolding from "./CardHolding";
import { actualPrice } from '../redux/holdings/actions';

export default function Holding() {
    const ops = useSelector( state => state?.operations.operations );
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