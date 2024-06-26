import './App.css'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from '../public/Assets/banner_mens.png'
import women_banner from '../public/Assets/banner_women.png'
import kid_banner from '../public/Assets/banner_kids.png'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/notebook' element={<ShopCategory banner={men_banner} category="notebook"/>}/>
          <Route path='/pc' element={<ShopCategory banner={women_banner} category="pc"/>}/>
          <Route path='/perifericos' element={<ShopCategory banner={kid_banner} category="perifericos"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
