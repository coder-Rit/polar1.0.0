import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease_total_amount, increase_total_amount, set_sell_amount, select_stock } from '../../redux/actions/basicActons'
import { setStockData } from '../../redux/actions/buyingActiton'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/core/styles";
import "./btn.css"


const useStyles = makeStyles({
    input: {
        color: "blue",
        backgroundColor: "red"
    }
});

const StockCounter = ({ stockVal }) => {

    const classes = useStyles();
    const [buyedStockArray, setbuyedStockArray] = useState([])
    const disPatch = useDispatch()
    const state = useSelector(state => state)
    const [TtotalBuying, setTtotalBuying] = useState(0)
    const [sell_quantity, setsell_quantity] = useState(0)
    const [quantity, setquantity] = useState(0)


    const buyingInput = (event) => {
        setquantity(parseInt(event.target.value))
        setTtotalBuying(event.target.value * stockVal)


    };
    const sellingInput = (event) => {
        setsell_quantity(parseInt(event.target.value))
        disPatch(set_sell_amount(parseInt(event.target.value))) 

    };

    const stockBuyed = () => {
        if (TtotalBuying <= state.basicInfo.basic.totalAmount) {

            disPatch(setStockData([...state.stockDatareducer.stocks, {
                id: Math.random(),
                quantity: quantity,
                value: stockVal,
                time: new Date().getTime()
            }]))

            disPatch(decrease_total_amount(stockVal * quantity))
        }
        else (
            window.alert("invalied balance")
        )
    }

    const sellStocks = () => {
        disPatch(increase_total_amount(state.basicInfo.sellQuanty * stockVal))
        console.log(state.basicInfo.current_stock.quantity);
        console.log(state.basicInfo.sellQuanty);
        const { id, quantity, value, time } = state.basicInfo.current_stock
        const new_Stock_Obj = [{
            id: id,
            quantity: quantity - state.basicInfo.sellQuanty,
            value: value,
            time: time
        }]
        disPatch(set_sell_amount(new_Stock_Obj[0].quantity))
        disPatch(select_stock(new_Stock_Obj[0]))
        const p = state.stockDatareducer.stocks.map(obj => new_Stock_Obj.find(o => o.id === obj.id) || obj)
        const v = p.filter((data) => data.quantity > 0)
        console.log(v);

        disPatch(setStockData(v))

    }

    useEffect(() => {
        disPatch(setStockData(buyedStockArray))
    }, [buyedStockArray])





    return (
        <div>
            <div className='button_input'>
               
                <div className="group">
                    <input placeholder='Buy Quantity'   id="standard-basic" label="Quantity" variant="standard" type="number" className='input'
                         onChange={buyingInput}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                    
                </div>  
                <Button variant="contained" className='BTN' onClick={() => stockBuyed()} style={{
                    borderRadius: 5,
                    backgroundColor: "#66ff00",
                    fontSize: "18px",
                    color: 'black'
                }} >buy</Button>

            </div>
                <p>{TtotalBuying}</p>




            <div className='button_input'>
            <div className="group">
                    <input placeholder='Sell Quantity '   id="standard-basic" label="Quantity" type="number" className='input' 
                    onChange={sellingInput} value={state.basicInfo.sellQuanty}/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    
                </div>   

                <Button variant="contained" className='BTN' onClick={() => sellStocks()} style={{
                    borderRadius: 5,
                    backgroundColor: "#66ff00",
                    fontSize: "18px",
                    color: "black"

                }}>sell</Button> 
            </div>
            
        </div>
    )
}

export default StockCounter