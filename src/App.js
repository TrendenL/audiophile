import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Headphones from './pages/Headphones/Headphones'
import Speakers from './pages/Speakers/Speakers'
import Earphones from './pages/Earphones/Earphones'
import Checkout from './pages/Checkout/Checkout'
import Footer from './components/Footer/Footer'
import productData from './ProductData'
import Product from './Product'

import './App.css'

export default function App() {
  const mappedProduct = productData.map(product => <Product {...product} key={product.name} />)
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      {mappedProduct}
      <Footer />
    </div>
  )
}
