import React from 'react'
import Layout from '../layout/Layout'
import Mini_TradingViewWidget from '../utils/mini_tredingView'
import TradingViewSymbolOverview from '../utils/symbol_trendingView'
import TradingViewScreenerWidget from '../utils/TopGainers'

const Overview = () => {
    const stockSymbols = [
        ["Tesla", "TSLA|1D"],
        ["Amazon", "AMZN|1D"],
        ["Netflix", "NFLX|1D"]
      ];



    return (
        <Layout >

            {/* header */}
            <div className='flex justify-around my-20'>

                {/* my wallet */}
                <div className=' '>
                    <div className='text-white text-[15px]'>My wallet</div>
                    <div className='text-3xl font-bold text-white my-2'>$34,343</div>
                    <div className='text-xs flex gap-2 text-white'>
                        <div className='text-custombuy'>+$23.23</div>
                        <div className='text-customtextLight'>Last update today</div>
                    </div>
                </div>

                {/* total investment */}
                <div className=' '>
                    <div className='text-white text-[15px]'>Total investments</div>
                    <div className='text-3xl font-bold text-white my-2'>$34,343</div>
                    <div className='text-xs flex gap-2 text-white'>
                        <div className='text-custombuy'>+$23.23</div>
                        <div className='text-customtextLight'>Last update today</div>
                    </div>
                </div>

                {/* return of investment */}
                <div className=' '>
                    <div className='text-white text-[15px]'>Return on investment</div>
                    <div className='text-3xl font-bold text-white my-2'>$34,343</div>
                    <div className='text-xs flex gap-2 text-white'>
                        <div className='text-custombuy'>+$23.23</div>
                        <div className='text-customtextLight'>Last update today</div>
                    </div>
                </div>
            </div>

            {/* container */}
            <div className='bg-white px-32 p-5 '>

                {/* mini graphs */}
                <div className='flex justify-between'>
                    <div className=' p-2 overflow-hidden rounded-2xl bg-gray-950 w-1/4 '>
                        <div className=' bg-gray-950'>
                            <Mini_TradingViewWidget StockName={'NASDAQ:AMZN'} />
                        </div>
                    </div>
                    <div className=' p-2 overflow-hidden rounded-2xl bg-gray-950 w-1/4 '>
                        <div className='bg-gray-950 '>
                            <Mini_TradingViewWidget StockName={'BSE:RELI1!'} />
                        </div>
                    </div>
                    <div className=' p-2 overflow-hidden rounded-2xl bg-gray-950 w-1/4 '>
                        <div className='bg-gray-950 '>
                            <Mini_TradingViewWidget StockName={'NASDAQ:TSLA'} />
                        </div>
                    </div>

                </div>

                {/* medium graphs */}
                <div className='my-7'>

                    {/* heading */}
                    <div className='text-black font-bold text-2xl mb-2'>
                        Symbolic Graphs
                    </div>
                    <div className=' bg-gray-950 p-5 rounded-2xl  '>

                        <div style={{ width: "100%", height: "400px" }}>
                        <TradingViewSymbolOverview symbols={stockSymbols} />
                        </div>
                    </div>
                </div>

                {/* gainers */}
                <div className='my-7'>

                    {/* top gainers */}
                    <div className='text-black font-bold text-2xl my-2 mt-5'>
                        Top gainers
                    </div>
                    <div className=' bg-gray-950 p-5 rounded-2xl  '>

                        <div >
                        <TradingViewScreenerWidget defaultScreen='top_gainers'/>
                        </div>
                    </div>

                    {/* top looser */}
                    <div className='text-black font-bold text-2xl my-2 mt-5'>
                        Top losers
                    </div>
                    <div className=' bg-gray-950 p-5 rounded-2xl  '>

                        <div >
                        <TradingViewScreenerWidget defaultScreen='top_losers'/>
                        </div>
                    </div>

                    {/* ATH */}
                    <div className='text-black font-bold text-2xl my-2 mt-5'>
                        All time high
                    </div>
                    <div className=' bg-gray-950 p-5 rounded-2xl  '>

                        <div >
                        <TradingViewScreenerWidget defaultScreen='ath'/>
                        </div>
                    </div>
                </div>



                <div></div>
            </div>

        </Layout>
    )
}

export default Overview