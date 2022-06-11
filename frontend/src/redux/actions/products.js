import { companyConstant } from "../constants/company_constant"

export const setCompany = (Companies)=>{
    return{
        type:companyConstant.SET_COMPANY,
        payload:Companies

    }
}

export const selectCompany = (Company)=>{
    return{
        type:companyConstant.SELECT_COMPANY,
        payload:Company

    }
}
 


