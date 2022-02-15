import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { usePrices } from "../hooks/usePrices"


export const Coins = () => {
    const { id } = useParams()
    const { getCurrency, currency } = usePrices()
    
    useEffect(() => {
        getCurrency(id as string)
        //eslint-disable-next-line
    }, [id])

    useEffect(() => {
        console.log(currency);
    }, [currency])

    return currency ? (
        <div className="">
            {currency?.name}
        </div>
    ) : (
        <div className="flex justify-center">
            <h1 className="text-3xl text-primary">Loading...</h1>
        </div>
    )
}