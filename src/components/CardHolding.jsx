import styled from "styled-components";
import CardTicker from "./CardTicker";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadHoldingsFromDB } from '../redux/holdings/actions';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { ItemHoldingColor, primaryColor, 
    secondaryColor, tertiaryColor, tertiaryHoverColor } from "../styles/colors";

export default function CardHolding(props) {
    const { id, date, ticker, amount, price, total, comment, actualPrice, profits, Operations } = props.ticker;
    const [showOps, setShowOps] = useState(false);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [ editDisabled, setEditDisabled ] = useState(true);
    const [ commentState, setCommentState ] = useState(comment+"");
    const dateTicker = new Date(date);
    const formattedDate = dateTicker.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    
    const editComment = e => {
        setCommentState(e.target.value);
        e.stopPropagation();
    };
    const updatingComment = async e => {
        e.stopPropagation();
        setEditDisabled(!editDisabled);
        console.log(commentState);
        // PUT apiUrl
        const apiUrl = process.env.REACT_APP_API_URL;
        try {
            await fetch(`${apiUrl}holdings`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    comment: commentState
                }),
              })
                .then(js => js.json())
                // .then(res => console.log(res))
                .then( () => dispatch(loadHoldingsFromDB(state.holdings.userId)) )
                .catch(e => console.error(e));
        } catch (err) {
            console.error(err);
        };
    };
    return (
        <Container>
            <Sector onClick={()=> setShowOps(!showOps)}>
                <Item>
                    <SubItem>{formattedDate}</SubItem>
                </Item>
                <Item>
                    <label>{ticker} </label>
                    <SubItem>{amount} {ticker} x ${price?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Capital Inicial </label>
                    <SubItem>${total?.toFixed(2)}</SubItem>
                </Item>
                { editDisabled ? 
                    <Item><label>Comentarios
                        <Btn onClick={ e => {
                            e.stopPropagation();
                            setEditDisabled(!editDisabled);
                            }}>
                            <BorderColorOutlinedIcon sx={{ fontSize: 12 }}/>
                        </Btn>
                    </label>
                        <SubItem>{comment}</SubItem>
                    </Item>
                : 
                    <Item><label>Comentarios
                        <Btn onClick={updatingComment}>Salvar</Btn>
                        </label>
                        <InputData type="text" name="comment" value={commentState} disabled={editDisabled}
                        onClick={e => e.stopPropagation() }
                        onChange={editComment}/>
                    </Item>
                }
                <Item>
                    <label>Precio Actual</label>
                    <SubItem>${actualPrice?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Capital Final</label>
                    <SubItem>${(amount*actualPrice?.toFixed(2)).toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>Ganancias </label>
                    <SubItem>${profits?.toFixed(2)}</SubItem>
                </Item>
                <Item>
                    <label>% Portafolio </label>
                    <SubItem>%{((amount*actualPrice*100)/(state?.holdings.totalActualPrice)).toFixed(2)}</SubItem>
                </Item>
                <button className="myButton"
                    onClick={()=> setShowOps(!showOps)}>
                    <ArrowDownwardIcon />
                </button>
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
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    background-color: ${primaryColor};
    margin: 0.5em 0.5em 0em 0.5em;
    padding: 1em 2em;
    border-radius: 5em;
    .myButton{
        color: white;
        margin: 0em 0.3em;
        padding: 0.1em 0.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5em;
        border: none;
        background-color: ${tertiaryColor};
        transition: all .4s ease;
        &:hover{
            background-color: ${tertiaryHoverColor};
            color: black;
        }
    }
`;

const Sector = styled.div`
    color: black;
    display: flex;
    // border: 2px solid #333;
    margin: 0.01em 0.5em 0em 0.5em;
    // padding: 0.05em;
    border-radius: 0.5em;
    flex-wrap: wrap;
`;
const DivOps = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    margin: 0.1em;
    padding: 0.1em;
    border-radius: 0.5em;
    flex-wrap: wrap;
`;
const Item = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${ItemHoldingColor};
    margin: 0.1em;
    padding: 0.1em;
    border-radius: 0.5em;
    // justify-content: flex-start;
    justify-content: center;
    // align-items: center;
`;
const SubItem = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    background-color: ${secondaryColor};
    // border: 2px solid #333;
    margin: 0.1em;
    padding: 0.3em;
    border-radius: 0.5em;
    flex-wrap: wrap;
`;

const Btn = styled.button`
    background-color: ${tertiaryColor};
    color: white;
    border-radius: 1em;
    padding: 0.2em 1em;
    margin: 0.3em;
    transition: all .4s ease;
    &:hover{
        background-color: ${tertiaryHoverColor};
        color: black;
    }
`;

const InputData = styled.input`
    max-width: 7vw;
`;