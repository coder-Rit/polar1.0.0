import { useSelector } from "react-redux";
import { companyConstant } from "../constants/company_constant";
 
const intialState =  {
    stocks:[ 
        
    ]  
}
 

export const stockDatareducer =(state=intialState,{type,payload})=>{ 
    switch (type) {
        case companyConstant.SET_STOCK:  
          return { ...state, stocks: payload }  

      
        default:
           return state
    }
}