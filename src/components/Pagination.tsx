import { Dispatch, SetStateAction } from "react"

type PaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
    return (
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
    )
}