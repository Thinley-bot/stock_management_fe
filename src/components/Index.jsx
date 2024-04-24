import React from 'react'
import {Link} from "react-router-dom"

const Landing = () => {
    return (
        <div className='bg-[url(/src/assets/img/stock.png)] h-screen w-screen flex flex-col justify-center items-center gap-10'>
            <h1 className='text-6xl font-extrabold text-white'>ATHANG GADGETS</h1>
            <h1 className='text-4xl font-extrabold text-blue-300'>Where Stock Management Meets Excellence.</h1>
            <div className="flex flex-row items-center justify-center gap-4">
                <Link to="/login" className="rounded border py-1 px-4 bg-white">
                    Login
                </Link>
                <Link to="/register" className="rounded border py-1 px-4 text-white">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Landing