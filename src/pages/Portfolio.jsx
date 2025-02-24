import React from 'react';
import Layout from '../layout/Layout';
import TradingViewSymbolOverview from '../utils/symbol_trendingView';

const Portfolio = () => {
  let stockSymbols = [
    ["Tesla", "TSLA|1D"],
  ];

  return (
    <Layout>
      <div className='bg-white px-32 p-5'>

        {/* heading */}
        <div className='text-black text-3xl font-bold'>
          Portfolio
        </div>

        {/* container */}
        <div className=' flex gap-5'>

          <div className='w-1/3 bg-gray-950 px-5 py-8 rounded-2xl mt-3'>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <div key={index}>
                <div className='flex justify-between py-2'>
                  <div className='text-white text-xl font-semibold'>TESLA Inc.</div>
                  <div className='text-white text-xl font-semibold'>$336</div>
                </div>
              </div>
            ))}
          </div>

          {/* graphs */}
          <div className='w-2/3 h-1/2 bg-gray-950 px-5 py-8 rounded-2xl mt-3'>
            <div style={{ width: "100%", height: "400px" }}>
              <TradingViewSymbolOverview symbols={stockSymbols} />
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Portfolio;