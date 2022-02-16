import { useState } from "react"
import { useSelector } from "react-redux"
import { AllCurrencies } from "../components/AllCurrencies"
import { Pagination } from "../components/Pagination"
import { RootState } from "../redux/store"

export const Dashboard = () => {
    const [page, setPage] = useState<number>(1) //126
    const vscurrency = useSelector((state: RootState) => state.c.currency)

    return (
        <div className="my-10 overflow-x-auto">
            <div className="mb-6 flex justify-end">
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