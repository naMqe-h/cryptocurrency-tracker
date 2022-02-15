import { useEffect } from "react"
import { usePrices } from "../hooks/usePrices"
import { SingleCurrency } from "./SingleCurrency"

export const AllCurrencies = () => {
    const { getAllCurrencies, allCurrencies } = usePrices()

    useEffect(() => {
        getAllCurrencies()
        //eslint-disable-next-line
    }, [])

    return (
        <div className="my-12">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th className="text-center w-0">Rank</th>
                        <th className="w-1">Name</th>
                        <th className="text-center">Symbol</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Price 24h</th>
                        <th className="text-center">Market cap</th>
                        <th className="text-center">Market cap 24h</th>
                        <th className="text-center">Total vol</th>
                    </tr>
                </thead>
                <tbody className="text-primary">
                    {allCurrencies.map(item => (
                        <SingleCurrency key={item.id} c={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}