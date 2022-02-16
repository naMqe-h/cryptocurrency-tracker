import axios from "axios"
import { useState } from "react"
import { SingleCurrencyInfo } from "../utils/utils"

export const usePrices = () => {
    const [allCurrencies, setAllCurrencies] = useState<SingleCurrencyInfo[]>([])
    const [currency, setCurrency] = useState<any>()
    const [historyOfPrice, setHistoryOfPrice] = useState<any>()
    
    const getAllCurrencies = async (page: number, vsCurrency: string) => {
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&price_change_percentage=24h,7d,30d&page=${page}`
        const response = await axios.get(url)
        setAllCurrencies(response.data)
    }

    const getCurrency = async (id: string) => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}?market_data=true&community_data=false&developer_data=true&sparkline=true`
        const response = await axios.get(url)
        setCurrency(response.data)
    }

    const getHistoryOfPrice = async (id: string, vscurrency: string) => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vscurrency}&days=30`
        const response = await axios.get(url)
        setHistoryOfPrice(response.data)
    }

    return { getAllCurrencies, allCurrencies, getCurrency, currency, getHistoryOfPrice, historyOfPrice }
}