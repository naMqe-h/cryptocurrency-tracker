import { useState } from "react"
import { AllCurrencies } from "../components/AllCurrencies"
import { Pagination } from "../components/Pagination"
import { vsCurrencySymbols } from "../utils/utils"

export const Dashboard = () => {
    const [page, setPage] = useState<number>(1) //126
    const [vscurrency, setVsCurrency] = useState<string>('usd')

    const selectCurrencies = Object.keys(vsCurrencySymbols)

    return (
        <div className="my-10 overflow-x-auto">
            <div className="mb-6 flex w-full">
                <div className="flex-1">
                    <select value={vscurrency} onChange={(e) => setVsCurrency(e.currentTarget.value)} className="select max-w-xs ml-2">
                        {selectCurrencies.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <Pagination page={page} setPage={setPage} />
            </div>
            <AllCurrencies vscurrency={vscurrency} page={page} />
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