import React from 'react'
import './ExclusiveOffers.css'

import exclusive_image from '../Assets/p1_img-removebg-preview.png'

const ExclusiveOffers = () => {
  return (
    <div className='exclusive-offers'>
        <div className="exclusive-offers-left">
            <h1>Exclusivo</h1>
            <h1>Ofertas para você</h1>
            <p>SOMENTE NOS PRODUTOS MAIS VENDEDOS</p>
            <button>Verifique</button>
        </div>
        <div className="exclusive-offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default ExclusiveOffers