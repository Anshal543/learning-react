import { useEffect, useState } from "react";



function useCurrencyInfo() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_LhhZuuWApiTNBb7diYR4i1C6Mm3TvYC1MeqTAeA3")
            .then((res) => res.json())
            .then((data) => setData(data.data))
        // console.log(data);
    }, [])
    // console.log(data);
    return data
}

export default useCurrencyInfo;




