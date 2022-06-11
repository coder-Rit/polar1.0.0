import { companyConstant } from "../constants/company_constant";
 
const intialState =  {
    basic:{
        totalAmount:50000
    } ,
    sellQuanty:0,
    current_stock:{}
}

export const basicInfo =(state=intialState,{type,payload})=>{ 
    switch (type) {
        case companyConstant.DECREASE_TOTAL_AMOUNT:  
          const newPayload1 =state.basic.totalAmount-payload
          return { ...state, basic: {
            totalAmount:newPayload1
          } }  

        case companyConstant.SET_SELL_AMOUNT:   
          return { ...state, sellQuanty:payload  }  

      case companyConstant.INCREASE_TOTAL_AMOUNT:  
          const newPayload2 =state.basic.totalAmount+parseInt(payload)
          return { ...state, basic: {
            totalAmount:newPayload2
          } } 

          case companyConstant.SLEECT_STOCK:   
          return { ...state, current_stock:payload  } 
        default:
           return state
    }
}