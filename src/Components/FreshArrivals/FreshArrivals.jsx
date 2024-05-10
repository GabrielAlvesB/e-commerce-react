import React from 'react'
import './FreshArrivals.css'
import new_collections from '../../Data/new_collections'
import Item from '../item/Item';

const FreshArrivals = () => {
  return (
    <div className='fresh-arrivals'>
        <h1>Novos Produtos</h1>
        <hr />
        <div className='fresh-arrivals-collections'>
            {new_collections.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default FreshArrivals