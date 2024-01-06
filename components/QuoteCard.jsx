"use client"
import React, { useEffect, useState } from 'react'

const QuoteCard = ({ quotes }) => {
    const [quote, setQuote] = useState({})

    useEffect(() => {
        setQuote(quotes[0])
    }, [quotes])
    

    return (
        <div className="w-full mx-auto flex items-center flex-col rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style={{ maxWidth: "500px" }}>
            <div className="w-fit mb-10">
                <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                <p className="text-sm text-gray-600 text-center px-5">{quote.q}</p>
                <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
            </div>
            <div className="w-full">
                <p className="text-md text-indigo-500 font-bold text-center">{quote.a}</p>
                {/* <p className="text-xs text-gray-500 text-center">@scott.windon</p> */}
            </div>
        </div>
    )
}

export default QuoteCard
