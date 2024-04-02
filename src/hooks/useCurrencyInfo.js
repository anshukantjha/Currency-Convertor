import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [datacur,setDatacur]=useState({})
    useEffect(()=>{
        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=c598206c7d2d4981a2af60fba45e6165`)
        .then((res)=>res.json())
        .then((res)=>setDatacur(res.rates))
    },[currency])
    return datacur
}

export default useCurrencyInfo;