import React from 'react'
import Layout from '../layout/Layout'
import TradingViewSymbolOverview from '../utils/symbol_trendingView'
import Mini_TradingViewWidget from '../utils/mini_tredingView'
import TradingViewWidget from '../utils/stock_market'

const Market = () => {
  const NSDQ_stockSymbols = [
    ["IG:NASDAQ|1D"],
  ]
  const DOW_stockSymbols = [
    ["BLACKBULL:US30|1D"],
  ]
  const SP_stockSymbols = [
    ["CAPITALCOM:US500|1D"],
  ]


  return (
    <Layout>
      <div >

        {/* treding chart */}

        <div className='px-32 bg-white py-10'>

          {/* us market */}
          <div className='pt-10 '>
            <div className='text-2xl font-bold mb-3'>US Market</div>

            <div className='flex justify-between'>
              {/* nasdq */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"IG:NASDAQ"} />
                </div>
              </div>

              {/* dow joes */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"BLACKBULL:US30"} />
                </div>
              </div>

              {/* s&p */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"CAPITALCOM:US500"} />
                </div>
              </div>
            </div>
            <div className='bg-gray-950 p-5 rounded-2xl '>
              <TradingViewWidget exchange='NASDAQ'/>
            </div>

          </div>


          {/* indian market */}
          <div className='pt-10 '>
            <div className='text-2xl font-bold mb-3'>Indian Market</div>

            <div className='flex justify-between'>
              {/* stock */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"BSE:RELIANCE"} />
                </div>
              </div>

              {/* hdfc bank */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"BSE:HDFCBANK"} />
                </div>
              </div>

              {/* etf */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"BSE:NIFTYIETF"} />
                </div>
              </div>
            </div>
            <div  className='bg-gray-950 p-5 rounded-2xl '>
              <TradingViewWidget exchange='BSE'/>
            </div>
          </div>


          {/* europe market */}
          <div className='pt-10 '>
            <div className='text-2xl font-bold mb-3'>European Market</div>

            <div className='flex justify-between'>
              {/* bme */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"BME:IG"} />
                </div>
              </div>

              {/* fx  */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"FX:EURUSD"} />
                </div>
              </div>

              {/* futures */}
              <div className='bg-gray-950 p-5 rounded-2xl mb-10'>
                <div >
                  <Mini_TradingViewWidget StockName={"EUREX:FDAX1!"} />
                </div>
              </div>
            </div>
            <div className='bg-gray-950 p-5 rounded-2xl '>
              <TradingViewWidget exchange='BME'/>
            </div>
          </div>

        </div>


      </div>

    </Layout>
  )
}

export default Market