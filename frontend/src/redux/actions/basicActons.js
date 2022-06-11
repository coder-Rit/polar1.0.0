import { companyConstant } from "../constants/company_constant"

export const decrease_total_amount = (totalAmount)=>{
   
    return{
        type:companyConstant.DECREASE_TOTAL_AMOUNT,
        payload:totalAmount

    }
}

export const set_sell_amount = (amount)=>{
   
    return{
        type:companyConstant.SET_SELL_AMOUNT,
        payload:amount

    }
}

export const increase_total_amount = (totalAmount)=>{
    
    return{
        type:companyConstant.INCREASE_TOTAL_AMOUNT,
        payload:totalAmount

    }
}

export const select_stock = (data)=>{
    
    return{
        type:companyConstant.SLEECT_STOCK,
        payload:data

    }
}