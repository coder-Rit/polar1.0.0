import React from "react";
import "./Newsfeed.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux'
import LineGraph from "./LineGraph";
import Chip from '@material-ui/core/Chip';
import TimeLine from './TimeLine'
import StockCounter from "./stockCounter/stockCounter";
import ShowStocks from "./stockCounter/showStocks";



function Newsfeed({ stockVal }) {
  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
       style: 'currency',
       currency: 'INR'
    });
 return curr;
 };
  const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]

  const stockdata = useSelector(store => store)


  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1>{toIndianCurrency(stockVal) }</h1> 
            <div  > 
            <h1>{toIndianCurrency(stockdata.basicInfo.basic.totalAmount)}</h1>
              <p>Balance</p>
            </div>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <div><StockCounter stockVal={stockVal}></StockCounter></div>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p>Your stocks</p>
            {
              stockdata.stockDatareducer.stocks.map((data, index) => {
                if (data.quantity > 0) {
                  return <ShowStocks key={index} fullData={data} data={data.quantity * data.value} quantity={data.quantity} id={index}></ShowStocks>
                }
              })

            }
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default Newsfeed;
