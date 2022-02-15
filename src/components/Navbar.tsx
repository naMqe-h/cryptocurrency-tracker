import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex justify-between py-2">
            <Link to='/'>
                <h1 className="text-primary font-bold text-3xl">Simple tracker</h1>
            </Link>
            <input type="text" placeholder="Search cryptocurrency" className="input input-bordered w-full max-w-xs" />
        </div>
    )
}