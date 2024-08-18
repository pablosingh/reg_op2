import { useSelector } from "react-redux";
import styled from "styled-components";
import CardHolding from "./CardHolding";

export default function Holding() {
    const hol = useSelector( state => state?.holdings.holdings );
    return (
        <Container>
            <Btn onClick={()=> console.log(state)}>Estado</Btn>
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