import styled from "styled-components";
import CardTicker from "./CardTicker";
import { useState } from "react";

export default function CardHolding(props) {
    const [showOps, setShowOps] = useState(false);
    const { date, ticker, amount, price, total, comment, actualPrice, profits, Operations } = props.ticker;
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return (
        <Container>
            <Sector>
                <Item>
                    <label>Fecha Inicial</label> 
                    <SubItem>{formattedDate}</SubItem>
                </Item>
                <Item>
                    <label>Ticker </label>
                    <SubItem>{ticker}</SubItem>
                </Item>
                <Item>
                    <label>Cantidad </label>
                    <SubItem>{amount}</SubItem>
                </Item>
                <Item>
                    <label>Precio Promedio </label>
                    <SubItem>{price?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Total </label>
                    <SubItem>{total?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Comentarios </label>
                    <SubItem>{comment}</SubItem>
                </Item>
                <Item>
                    <label>Precio Actual</label>
                    <SubItem>{actualPrice?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Ganancias </label>
                    <SubItem>{profits?.toFixed(2)}</SubItem>
                </Item>
                <Btn onClick={()=> setShowOps(!showOps)}>Operaciones</Btn>
                {/* <Btn onClick={()=> console.log(props)}>Props</Btn> */}
            </Sector>
            
            { showOps ? 
                <DivOps>
                    { Operations && Operations.map( o => <CardTicker ticker={o} key={o.id} />) }
                </DivOps>
            : null }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(22,130,177,255);
    margin: 0;
    padding: 0;
`;

const Sector = styled.div`
    color: black;
    display: flex;
    // border: 2px solid #333;
    margin: 0.01em 0.5em 0em 0.5em;
    // padding: 0.05em;
    border-radius: 0.5em;
`;
const DivOps = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    margin: 0.1em;
    padding: 0.1em;
    border-radius: 0.5em;
`;
const Item = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    margin: 0.1em;
    padding: 0.1em;
    border-radius: 0.5em;
    justify-content: flex-start;
    // align-items: center;
`;
const SubItem = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    background-color: rgba(22,130,107,255);
    // border: 2px solid #333;
    margin: 0.1em;
    padding: 0.3em;
    border-radius: 0.5em;
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