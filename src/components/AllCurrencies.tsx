import { useEffect } from "react"
import { usePrices } from "../hooks/usePrices"
import { SingleCurrency } from "./Table/SingleCurrency"

type AllCurrenciesProps = {
    page: number,
    vscurrency: string,
}

export const AllCurrencies: React.FC<AllCurrenciesProps> = ({ page, vscurrency }) => {
    const { getAllCurrencies, allCurrencies } = usePrices()

    useEffect(() => {
        getAllCurrencies(page, vscurrency)
        const updateInfo = setInterval(() => getAllCurrencies(page, vscurrency), 5000)

        return () => clearInterval(updateInfo)
        //eslint-disable-next-line
    }, [page, vscurrency])

    return (
        <table className="table table-zebra w-full">
            <thead>
                <tr>
                    <th className="text-center w-0">Rank</th>
                    <th className="w-1">Name</th>
                    <th className="text-center">Symbol</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Price 24h</th>
                    <th className="text-center">Price 7d</th>
                    <th className="text-center">Price 30d</th>
                    <th className="text-center">Market cap</th>
                    <th className="text-center">Total vol</th>
                </tr>
            </thead>
            <tbody className="text-primary">
                {allCurrencies.map(item => (
                    <SingleCurrency key={item.id} vscurrency={vscurrency} c={item} />
                ))}
            </tbody>
        </table>
    )
}