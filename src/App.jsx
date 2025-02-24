import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Overview from './pages/Overview'
import Portfolio from './pages/Portfolio'
import Transaction from './pages/Transaction'
import Market from './pages/Market'
import Community from './pages/Community'
import News from './pages/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/market' element={<Market />} />
            <Route path='/news' element={<News />} />
            <Route path='/community' element={<Community />} />

          </Routes>
        </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
