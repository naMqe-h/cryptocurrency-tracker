import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { usePrices } from "../hooks/usePrices"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { vsCurrencySymbols } from "../utils/utils";
import { FaGithub, FaHome } from 'react-icons/fa'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
  
export const Coins = () => {
    const { id } = useParams()
    const vscurrency = useSelector((state: RootState) => state.c.currency)
    const { getCurrency, currency: c, getHistoryOfPrice, historyOfPrice: h } = usePrices()
    const [dates, setDates] = useState<string[]>([])
    const [prices, setPrices] = useState<any[]>([])

    const data = {
        labels: [...dates?.map((item: string) => (item))],
        datasets: [
            {
                label: `Price (${vsCurrencySymbols[vscurrency]})`,
                data: [...prices.map((item: any) => ( item[1] )) || '1'],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    useEffect(() => {
        getCurrency(id as string)
        //eslint-disable-next-line
    }, [id])
    
    useEffect(() => {
        getHistoryOfPrice(id as string, vscurrency)
        //eslint-disable-next-line
    }, [vscurrency])

    useEffect(() => {
        console.log(c);
    }, [c])

    useEffect(() => {
        if(h?.prices) {
            const dif: string[] = []
            h.prices.forEach((item: any) => {
                dif.push(new Date(item[0]).toLocaleDateString())
            })
            setPrices(h.prices)
            setDates(dif)
        }
    }, [h])

    return c ? (
        <div className="mt-6">
            <header className="flex justify-between">
                <div className="flex items-center gap-3">
                    <img src={c.image.small} alt={c.id} />
                    <h2 className="text-white font-bold text-2xl">{c.name}({c.symbol.toUpperCase()})</h2>
                    <div className="mt-2 gap-4 flex">
                        <div className="dropdown">
                            <FaGithub tabIndex={0} className='cursor-pointer' fill='#fff' size={24} />
                            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52">
                                {/*eslint-disable-next-line */}
                                {c?.links?.repos_url?.github?.map((item: string) => {
                                    if(item !== "") {
                                        return (
                                            <li key={item}>
                                                <a href={item} target="_blank" rel="noreferrer">
                                                    <span className="text-white">{item.split('/').at(-1)}</span>
                                                </a>
                                            </li>
                                        )
                                    }
                                    })}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <FaHome tabIndex={0} className='cursor-pointer' fill='#fff' size={24} />
                            <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-200 rounded-box w-52">
                                {/*eslint-disable-next-line */}
                                {c?.links?.homepage?.map((item: string) => {
                                    if(item !== "") {
                                        return (
                                            <li key={item}>
                                                <a href={item} target="_blank" rel="noreferrer">
                                                    <span className="text-white">{item.split('/').at(-1)}</span>
                                                </a>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <h2 className="text-green-400 font-bold text-2xl">{c.market_data.current_price[vscurrency]}{vsCurrencySymbols[vscurrency]}</h2>
                </div>
            </header>
            <div className="divider"></div>
            <div className="shadow stats w-full justify-center">
                <div className="stat">
                    <div className="stat-title text-white opacity-100 font-bold">Market cap</div>
                    <div className="stat-value text-gray-500">{c.market_data.market_cap[vscurrency].toLocaleString()}{vsCurrencySymbols[vscurrency]}</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-white opacity-100 font-bold">Total volume</div>
                    <div className="stat-value text-gray-500">{c.market_data.total_volume[vscurrency].toLocaleString()}{vsCurrencySymbols[vscurrency]}</div>
                </div>
                <div className="stat">
                    <div className="stat-title text-white opacity-100 font-bold">Circulating supply</div>
                    <div className="stat-value text-gray-500">{c.market_data.circulating_supply.toLocaleString()}$</div>
                </div>
            </div>
            <div className="px-10 mt-6">
                <h1 className="text-2xl font-bold text-white">Price history: (30 days)</h1>
                <Line data={data} />
            </div>

        </div>
    ) : (
        <div className="flex justify-center">
            <h1 className="text-3xl text-primary">Loading...</h1>
        </div>
    )
}