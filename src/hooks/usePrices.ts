import axios from "axios"
import { useState } from "react"
import { SingleCurrencyInfo } from "../utils/interfaces"

export const usePrices = () => {
    const [allCurrencies, setAllCurrencies] = useState<SingleCurrencyInfo[]>([])
    const [currency, setCurrency] = useState<any>()
    
    const getAllCurrencies = async (page: number) => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=24h,7d,30d&page=${page}`
        const response = await axios.get(url)
        setAllCurrencies(response.data)
    }

    const getCurrency = async (id: string) => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=false&developer_data=true&sparkline=true`
        const response = await axios.get(url)
        setCurrency(response.data)
    }

    return { getAllCurrencies, allCurrencies, getCurrency, currency }
}