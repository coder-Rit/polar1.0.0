import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select_stock, set_sell_amount } from '../../redux/actions/basicActons'
import './stockCounter.css'

const ShowStocks = (props) => {
  const stockdata = useSelector(store=>store.stockDatareducer.stocks)
  const disPatch = useDispatch()
  
    const toIndianCurrency = (num) => {
      const curr = num.toLocaleString('en-IN', {
         style: 'currency',
         currency: 'INR'
      });
   return curr;
   };

  const func =()=>{
   
   disPatch(select_stock(props.fullData))
    disPatch(set_sell_amount(props.quantity))
  }
  
  return (
    <>  
                <div  className='sell_Stock_Show'   >
                  <div>
                    <h2>AAPL</h2>
                  </div>
                  <div>
                    <h1>{toIndianCurrency(props.data)}</h1> 
                  </div>
                  <div>
                    <p>{props.fullData.quantity}   </p>

                  </div>
                    <div> 
                    <p>{props.fullData.value}</p>
                    </div>

                    <Button variant="contained" className='BTN' onClick={()=>func()}  id={props.id} style={{
                    borderRadius: 5,
                    backgroundColor: "#66ff00",
                    fontSize: "18px",
                    color: 'black'
                }} >Sell</Button>

                    
                </div> 
     </>
  )
}

export default ShowStocks