import React, { useContext, useState } from 'react'
import './Navbar.css'

//Imagens
import logo from '../../../public/Assets/logo-simples.png'
import cart_icon from '../../../public/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <div className='logo'>
          <img src={logo} alt="" />
          <p>HDCSHOP</p>
        </div>
        <div className='nav-login-cart-mobile'>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Link to='/cart'>
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("notebook")}}><Link style={{textDecoration: 'none'}} to='/notebook'>notebook</Link>{menu === "notebook"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("pc")}}><Link style={{textDecoration: 'none'}} to='/pc'>Pc</Link>{menu === "pc"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("perifericos")}}><Link style={{textDecoration: 'none'}} to='/perifericos'>perifericos</Link>{menu === "perifericos"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar