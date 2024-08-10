import styled from "styled-components";

export default function CardTicker(props) {
    const { date, amount, price, total, buy, exchange, comment } = props.ticker;
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return (
        <Container>
            <Sector><label>Fecha</label> {formattedDate}</Sector>
            <Sector><label>Cantidad </label>{amount}</Sector>
            <Sector><label>Precio </label>{price}</Sector>
            <Sector><label>Total </label>{total}</Sector>
            <Sector><label>Estado</label>{buy ? "Compra": "Venta"}</Sector>
            <Sector><label>Exchange</label>{exchange}</Sector>
            <Sector><label>Comentarios</label>{comment}</Sector>
            <Sector><Btn onClick={()=>{}}>Editar</Btn></Sector>
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

const Sector = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    border: 2px solid #333;
    margin: 0.5em;
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