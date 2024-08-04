import styled from "styled-components";

export default function CardHolding(props) {
    const { date, ticker, amount, price, total } = props.ticker;
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return (
        <Container>
            <Sector><label>Fecha Inicial</label> {formattedDate}</Sector>
            <Sector><label>Ticker </label>{ticker}</Sector>
            <Sector><label>Cantidad </label>{amount}</Sector>
            <Sector><label>Precio Promedio </label>{price}</Sector>
            <Sector><label>Total </label>{total}</Sector>

            <Sector><label>Precio Actual</label></Sector>
            <Sector><label>Ganancias </label></Sector>
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