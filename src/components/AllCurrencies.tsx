import { useEffect, useState } from "react"
import { usePrices } from "../hooks/usePrices"
import { SingleCurrency } from "./Table/SingleCurrency"

export const AllCurrencies = () => {
    const { getAllCurrencies, allCurrencies } = usePrices()
    const [page, setPage] = useState<number>(1) //126

    useEffect(() => {
        getAllCurrencies(page)
        const updateInfo = setInterval(() => getAllCurrencies(page), 5000)

        return () => clearInterval(updateInfo)
        //eslint-disable-next-line
    }, [page])

    return (
        <div className="my-10 overflow-x-auto">
            <div className="mb-6 flex justify-end">
                <div className="btn-group">
                    {page === 1 ? (
                        <button className="btn w-16" disabled>«</button>
                    ) : (
                        <button onClick={() => setPage(prev => prev - 1)} className="btn w-16">«</button>
                    )}
                    <button className="btn w-40">Page {page}</button>
                    {page === 126 ? (
                        <button className="btn w-16" disabled>»</button>
                    ) : (
                        <button onClick={() => setPage(prev => prev + 1)} className="btn w-16">»</button>
                    )}
                </div>
            </div>
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
                        <SingleCurrency key={item.id} c={item} />
                    ))}
                </tbody>
            </table>
            <div className="mt-6 flex justify-end">
                <div className="btn-group">
                    {page === 1 ? (
                        <button className="btn w-16" disabled>«</button>
                    ) : (
                        <button onClick={() => setPage(prev => prev - 1)} className="btn w-16">«</button>
                    )}
                    <button className="btn w-40">Page {page}</button>
                    {page === 126 ? (
                        <button className="btn w-16" disabled>»</button>
                    ) : (
                        <button onClick={() => setPage(prev => prev + 1)} className="btn w-16">»</button>
                    )}
                </div>
            </div>
        </div>
    )
}