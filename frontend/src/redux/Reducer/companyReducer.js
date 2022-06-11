import { companyConstant } from "../constants/company_constant";
 
const intialState =  {
    allCompanies:[ 
        
    ]  
}

export const companyReducer =(state=intialState,{type,payload})=>{

   

    switch (type) {
        case companyConstant.SET_COMPANY: 
        
          return { ...state, allCompanies: payload }
    

      
    
        default:
           return state
    }
}