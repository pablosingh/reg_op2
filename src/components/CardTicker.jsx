import { useState } from "react";
import styled from "styled-components";

export default function CardTicker(props) {
    const { id, date, amount, price, total, buy, exchange, comment } = props.ticker;
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const initialData = {
        id,
        date,
        // ticker,
        amount,
        price,
        total,
        buy: buy,
        exchange,
        comment,
    }
    const [ editDisabled, setEditDisabled ] = useState(true);
    const [ data, setData ] = useState(initialData);
    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <Container>
            <Sector><label>Fecha</label> {formattedDate}</Sector>
            <Sector>
                <label>Cantidad </label>
                <InputData type="number" name="amount" value={data.amount} disabled={editDisabled}
                onChange={changing}/>
            </Sector>
            <Sector>
                <label>Precio </label>
                <InputData type="number" name="price" value={data.price} disabled={editDisabled}
                onChange={changing}/>
            </Sector>
            <Sector>
                <label>Total </label>
                <InputData type="number" name="total" value={data.total} disabled={editDisabled}
                onChange={changing}/>
            </Sector>
            <Sector><label>Estado</label>{buy ? "Compra": "Venta"}</Sector>
            <Sector>
                <label>Exchange</label>
                <InputData type="text" name="exchange" value={data.exchange} disabled={editDisabled}
                onChange={changing}/>
            </Sector>
            <Sector>
                <label>Comentarios</label>
                <InputData type="text" name="comment" value={data.comment} disabled={editDisabled}
                onChange={changing}/>
            </Sector>
            <Sector>
                { 
                    editDisabled ? <Btn onClick={()=> setEditDisabled(!editDisabled)}>Editar</Btn>
                    : <Btn onClick={()=>setEditDisabled(!editDisabled)}>Salvar</Btn>
                }
            </Sector>
            <Sector><Btn onClick={()=>console.log(data)}>Item</Btn></Sector>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    background-color: rgba(180,230,237,255);
    // margin: 0.5em;
    // padding: 0.1em;
    border-radius: 0.5em;
`;
const InputData = styled.input`
    max-width: 7vw;
`;
const Sector = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    margin: 0.3em;
    padding: 0.1em;
    border-radius: 0.5em;
`;

const Btn = styled.button`
    background-color: rgba(8,108,9,1);
    color: white;
    border-radius: 1em;
    padding: 0.2em 1em;
    margin: 0.3em;
    transition: all .4s ease;
    &:hover{
        background-color: rgba(8,108,9,0.5);
        color: black;
    }
`;