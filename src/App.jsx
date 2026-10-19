import Home from './pages/home'
import Navbar from './components/Navbar'
import Auth from './pages/auth'
import Checkout from './pages/checkout'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </div>
  )
}

export default App
