import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addOperation } from '../redux/operations/actions'
import { average } from "../redux/holdings/actions";

export default function AddOp () {
    const initialData = {
        date: "",
        ticker: "",
        amount: "",
        price: "",
        total: "",
        buy: "",
    }
    const [ data, setData ] = useState(initialData);
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const sending = e => {
        // console.log(data);
        const toSend = {
            ...data,
            amount: Number.parseFloat(data.amount),
            price: Number.parseFloat(data.price),
            total: Number.parseFloat(data.amount)*Number.parseFloat(data.price),
        };
        dispatch(addOperation(toSend));
        dispatch(average(toSend));
        setData(initialData);
    };
    return(
        <div>
            <label>Fecha</label>
            <input type="text" name="date" value={data.date} 
                className="" onChange={changing}/>
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
            <label>Compra o Venta</label>
            <input type="text" name="buy" value={data.buy}
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