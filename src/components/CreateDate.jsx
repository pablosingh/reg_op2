import { useState } from "react";
import styled from 'styled-components';

export default function CreateDate( {handlerDate} ){
    const initialDate = {
        day: 1,
        month: 0,
        year: 2024,
    };
    const [ newDate, setNewDate ] = useState(initialDate);
    const changing = e => {
        setNewDate({
            ...newDate,
            [e.target.name]: e.target.value,
        });
        handlerDate({
            ...newDate,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <div>
            <input type="number" name="day" value={newDate.day} onChange={changing} ></input>
            <input type="number" name="month"  value={newDate.month} onChange={changing} ></input>
            <input type="number" name="year"  value={newDate.year} onChange={changing} ></input>
            <Btn onClick={()=> {
                const dateTicker = new Date(newDate.year, newDate.month, newDate.day);
                console.log(dateTicker);
            }}>Enviar</Btn>
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