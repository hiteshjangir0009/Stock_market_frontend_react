import React from 'react'
import Layout from '../layout/Layout'
import TradingViewTimelineWidget from '../utils/News_widgets'

const News = () => {
  return (
    <Layout>
    <div className='bg-white px-32 py-20'>
      <div className='rounded-2xl bg-gray-950 p-5'>
      <TradingViewTimelineWidget/>

      </div>
    </div>

    </Layout>
  )
}

export default News