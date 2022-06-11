import { companyConstant } from "../constants/company_constant"

export const setStockData = (stocks)=>{
   
    return{
        type:companyConstant.SET_STOCK,
        payload:stocks

    }
}

 