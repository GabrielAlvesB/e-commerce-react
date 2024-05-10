import React from 'react'
import './Breadcrums.css'

import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = ({product}) => {
  return (
    <div className='breadcrums'>
        HOME <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />
        <span className='breadcrums-mobile'>{product.name}</span>
    </div>
  )
}

export default Breadcrums;