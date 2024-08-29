import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadHoldingsFromDB } from '../redux/holdings/actions';
import CreateDate from './CreateDate';
import BuySellComponent from './BuySellComponent';

export default function AddOp () {
    const initialData = {
        date: "",
        ticker: "",
        amount: "",
        price: "",
        total: "",
        buy: true,
        exchange: "",
        comment: "",
    }
    const today = new Date();
    const initialDate = {
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
    };
    const [ data, setData ] = useState(initialData);
    const [ buy, setBuy ] = useState(true);
    const [ myDate, setMyDate ] = useState(initialDate);
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const changing = e => {
        setData({
            ...data,
            buy,
            [e.target.name]: e.target.value,
        });
    };
    const handlerBuy = buyValue => {
        setBuy(buyValue);
    };
    const handlerDate = ( objDate ) => {
        setMyDate(objDate);
    };
    const addOpsToDB = async (toAdd) => {
        // console.log(toAdd);
        const apiUrl = process.env.REACT_APP_API_URL;
        try {
            await fetch(`${apiUrl}/operations`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(toAdd),
              })
                .then(js => js.json())
                // .then(res => console.log(res))
                .then( () => dispatch(loadHoldingsFromDB(state.holdings.userId)) )
                .catch(e => console.error(e));
        } catch (err) {
            console.error(err);
        };
    };
    const sending = e => {
        const dateTicker = new Date(myDate.year, myDate.month, myDate.day);
        const toSend = {
            ...data,
            date: dateTicker,
            buy,
            amount: Number.parseFloat(data.amount),
            price: Number.parseFloat(data.price),
            total: Number.parseFloat(data.amount)*Number.parseFloat(data.price),
            UserId: state.holdings.userId
        };
        console.log(toSend);
        addOpsToDB(toSend);
        setData(initialData);
    };
    // useEffect( ()=> {
    //     console.log("Add Op");
    // }, []);
    return(
        <Container>
            <SubContainer>
                <CreateDate handlerDate={handlerDate}/>
                <Sector>
                    <label>Ticker</label>
                    <InputData type="text" name="ticker" value={data.ticker}
                        className="" onChange={changing}/>
                </Sector>
                <Sector>
                    <label>Cantidad</label>
                    <InputData type="text" name="amount" value={data.amount}
                        className="" onChange={changing}/>
                </Sector>
                <Sector>
                    <label>Precio</label>
                    <InputData type="text" name="price" value={data.price}
                        className="" onChange={changing}/>
                </Sector>
                <BuySellComponent handlerBuy={handlerBuy} buyInitial={buy} buyDisabled={false}/>
                <Sector>
                    <label>Exchange</label>
                    <InputData type="text" name="exchange" value={data.exchange}
                        className="" onChange={changing}/>
                </Sector>
                <Sector>
                    <label>Comentarios</label>
                    <InputData type="text" name="comment" value={data.comment}
                        className="" onChange={changing}/>
                </Sector>
                <Sector>
                    <Btn onClick={sending}>Agregar</Btn>
                    <Btn onClick={()=> console.log(state)}>Estado</Btn>
                    <Btn onClick={()=> console.log(buy)}>buy</Btn>
                </Sector>
            </SubContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    // background-color: rgba(220,130,17,255);
    margin: 0em;
    padding: 0em;
    align-items: center;
    justify-content: center;
    // border: 2px solid #333;
`;

const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    // min-height: 80vh;
    // background-color: rgba(220,130,17,255);
    margin: 0em;
    padding: 1em;
    align-items: center;
    justify-content: center;
    border: 2px solid #333;
    border-radius: 2em;
`;
const Sector = styled.div`
    // background-color: rgba(220,130,17,255);
    // max-width: 25vw;
    color: black;
    display: flex;
    // border: 2px solid #333;
    margin: 0em;
    padding: 0.01em;
    // border-radius: 0.5em;
    align-items: center;
`;
const InputData = styled.input`
    max-width: 7vw;
    margin: 0.2em 0em 0em 0.7em;
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