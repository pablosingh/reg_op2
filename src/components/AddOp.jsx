import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadHoldingsFromDB } from '../redux/holdings/actions'
import CreateDate from './CreateDate';

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
    const initialDate = {
        day: 1,
        month: 0,
        year: 2024,
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
    const handleBuy = e => {
        setBuy(e.target.value);
    };
    const handlerDate = ( objDate ) => {
        setMyDate(objDate);
        console.log(objDate);
    };
    const addOpsToDB = async (toAdd) => {
        console.log(toAdd);
        try {
            await fetch(`http://localhost:3001/operations`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(toAdd),
              })
                .then(js => js.json())
                // .then(res => console.log(res))
                .then( () => dispatch(loadHoldingsFromDB()) )
                .catch(e => console.error(e));
        } catch (err) {
            console.error(err);
        }
    }
    const sending = e => {
        const dateTicker = new Date(myDate.year, myDate.month, myDate.day);
        const toSend = {
            ...data,
            date: dateTicker,
            buy,
            amount: Number.parseFloat(data.amount),
            price: Number.parseFloat(data.price),
            total: Number.parseFloat(data.amount)*Number.parseFloat(data.price),
            UserId: 1
        };
        console.log(toSend);
        addOpsToDB(toSend);
        setData(initialData);
    };
    return(
        <div>
            <label>Fecha</label>
            {/* <input type="text" name="date" value={data.date} 
                className="" onChange={changing}/> */}
            <CreateDate handlerDate={handlerDate}/>
            <br/>
            <label>Ticker</label>
            <input type="text" name="ticker" value={data.ticker}
                className="" onChange={changing}/>
            <br/>
            <label>Cantidad</label>
            <input type="text" name="amount" value={data.amount}
                className="" onChange={changing}/>
            <br/>
            <label>Precio</label>
            <input type="text" name="price" value={data.price}
                className="" onChange={changing}/>
            <br/>
            <label>Compra 
                <input type="radio" name="buy" value={true} defaultChecked={true}
                    className="" onChange={handleBuy}/>
            </label>
            <label>Venta 
                <input type="radio" name="buy" value={false}
                    className="" onChange={handleBuy}/>
            </label>
            <br/>
            <label>Exchange</label>
            <input type="text" name="exchange" value={data.exchange}
                className="" onChange={changing}/>
            <br/>
            <label>Comentarios</label>
            <input type="text" name="comment" value={data.comment}
                className="" onChange={changing}/>
            <br/>
            <Btn onClick={sending}>Agregar</Btn>
            <Btn onClick={()=> console.log(state)}>Estado</Btn>
        </div>
    );
};

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