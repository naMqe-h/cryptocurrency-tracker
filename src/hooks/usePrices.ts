import axios from "axios"
import { useState } from "react"
import { SingleCurrencyInfo } from "../utils/interfaces"

export const usePrices = () => {
    const [allCurrencies, setAllCurrencies] = useState<SingleCurrencyInfo[]>([])
    
    const getAllCurrencies = async () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
        const response = await axios.get(url)
        console.log(response.data)
        setAllCurrencies(response.data)
    }

    return { getAllCurrencies, allCurrencies }
}