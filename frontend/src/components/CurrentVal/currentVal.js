import axios from 'axios'
import React, { useState, useEffect } from 'react'


const CurrentVal = () => {
    const [val, setval] = useState(0)
    const getstocks = async () => {
        const res = await axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=caf790qad3ibf4h8taag").catch(err => console.log(err))
        setval(res.data.c)
        console.log(res.data);
    }
    useEffect(() => { 
        getstocks() 
    }, [])

    return (
        <> 
            {val}
        </>
    )
}

export default CurrentVal