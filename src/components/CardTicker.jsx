import styled from "styled-components";

export default function CardTicker(props) {
    const { date, ticker, amount, price, total, buy, exchange, comment } = props.ticker;
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return (
        <Container>
            <Sector><label>Fecha</label> {formattedDate}</Sector>
            <Sector><label>Ticker </label>{ticker}</Sector>
            <Sector><label>Cantidad </label>{amount}</Sector>
            <Sector><label>Precio </label>{price}</Sector>
            <Sector><label>Total </label>{total}</Sector>
            <Sector><label>Estado</label>{buy}</Sector>
            <Sector><label>Exchange</label>{exchange}</Sector>
            <Sector><label>Comentarios</label>{comment}</Sector>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
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