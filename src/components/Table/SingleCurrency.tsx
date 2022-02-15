import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useColor } from "../../hooks/useColor"
import { SingleCurrencyInfo } from "../../utils/interfaces"

type SingleCurrencyProps = {
    c: SingleCurrencyInfo
}

export const SingleCurrency: React.FC<SingleCurrencyProps> = ({ c }) => {
    const [pricePercentage24h, setPricePercentage24h] = useState<string>('text-secondary')
    const [pricePercentage7d, setPricePercentage7d] = useState<string>('text-primary')
    const [pricePercentage30d, setPricePercentage30d] = useState<string>('text-primary')
    const { getColor } = useColor()

    useEffect(() => {
        setPricePercentage24h(getColor(c?.price_change_percentage_24h))
        setPricePercentage7d(getColor(c?.price_change_percentage_7d_in_currency))
        setPricePercentage30d(getColor(c?.price_change_percentage_30d_in_currency))
        //eslint-disable-next-line
    }, [c])

    return (
        <tr>
            <th className="text-center">{c?.market_cap_rank}</th>
            <td className='items-center'>
                <Link to={`/coins/${c?.id}`} className='flex gap-4 text-orange-300 font-bold'>
                    <img src={c?.image} alt="Currency" width='24px' />{c?.name}
                </Link>
            </td>
            <td className="text-center">{c?.symbol?.toUpperCase()}</td>
            <td className="text-center">{c?.current_price}$</td>
            <td className={`text-center ${pricePercentage24h}`}>{c?.price_change_percentage_24h?.toFixed(2) || '0.00'}%</td>
            <td className={`text-center ${pricePercentage7d}`}>{c?.price_change_percentage_7d_in_currency?.toFixed(2) || '0.00'}%</td>
            <td className={`text-center ${pricePercentage30d}`}>{c?.price_change_percentage_30d_in_currency?.toFixed(2) || '0.00'}%</td>
            <td className="text-center">{c?.market_cap?.toLocaleString()}$</td>
            <td className="text-center">{c?.total_volume?.toLocaleString()}$</td>
        </tr>
    )
}