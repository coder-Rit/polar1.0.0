 import {configureStore} from "@reduxjs/toolkit"
import { basicInfo } from "./redux/Reducer/basicReducer";
import { companyReducer } from "./redux/Reducer/companyReducer";
import { stockDatareducer } from "./redux/Reducer/stockreducer";
  


const Store = configureStore({reducer:{
    companyReducer,
    stockDatareducer,basicInfo
    
}} )
export default Store 