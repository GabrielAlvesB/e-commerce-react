import React from 'react'
import './AssociatedItems.css'

import data_product from '../../Data/data'
import Item from '../item/Item';

const AssociatedItems = () => {
  return (
    <div className='AssociatedItems'>
        <h1>Produtos Relacionados</h1>
        <hr />
        <div className="AssociatedItems-item">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default AssociatedItems