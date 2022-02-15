import { useEffect, useState } from "react"
import { useColor } from "../hooks/useColor"
import { SingleCurrencyInfo } from "../utils/interfaces"

type SingleCurrencyProps = {
    c: SingleCurrencyInfo
}

export const SingleCurrency: React.FC<SingleCurrencyProps> = ({ c }) => {
    const [pricePercentage24h, setPricePercentage24h] = useState<string>('text-secondary')
    const [marketCapPercentage24h, setMarketCapPercentage24h] = useState<string>('text-primary')
    const { getColor } = useColor()

    useEffect(() => {
        setPricePercentage24h(getColor(c.price_change_percentage_24h))
        setMarketCapPercentage24h(getColor(c.market_cap_change_percentage_24h))
        //eslint-disable-next-line
    }, [c])

    return (
        <tr>
            <th className="text-center">{c.market_cap_rank}</th>
            <td className='flex gap-4 items-center'><img src={c.image} alt="Currency" width='24px' /> {c.name}</td>
            <td className="text-center">{c.symbol.toUpperCase()}</td>
            <td className="text-center">{c.current_price}$</td>
            <td className={`text-center ${pricePercentage24h}`}>{c.price_change_percentage_24h.toFixed(2)}%</td>
            <td className="text-center">{c.market_cap.toLocaleString()}$</td>
            <td className={`text-center ${marketCapPercentage24h}`}>{c.market_cap_change_percentage_24h.toFixed(2)}%</td>
            <td className="text-center">{c.total_volume.toLocaleString()}$</td>
        </tr>
    )
}