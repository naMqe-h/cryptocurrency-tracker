import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setCurrency } from "../redux/currencyReducer"
import { RootState } from "../redux/store"
import { vsCurrencySymbols } from "../utils/utils"

export const Navbar = () => {
    const dispatch = useDispatch()
    const vscurrency = useSelector(({ c }: RootState) => c.currency)

    const selectCurrencies = Object.keys(vsCurrencySymbols)
    return (
        <div className="flex py-2">
            <div className="flex-1">
                <Link to='/'>
                    <h1 className="text-primary font-bold text-3xl">Cryptocurrency tracker</h1>
                </Link>
            </div>
            {/* onChange={(e) => setVsCurrency(e.currentTarget.value)} */}
            <select value={vscurrency} onChange={(e) => dispatch(setCurrency(e.currentTarget.value))}  className="select select-bordered max-w-xs ml-2">
                {selectCurrencies.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
            <input type="text" placeholder="Search cryptocurrency" className="input input-bordered w-full max-w-xs ml-2" />
        </div>
    )
}