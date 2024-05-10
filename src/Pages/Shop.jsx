import React from 'react'
import Popular from '../Components/Popular/Popular'
import ExclusiveOffers from '../Components/ExclusiveOffers/ExclusiveOffers'
import FreshArrivals from '../Components/FreshArrivals/FreshArrivals';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import MainBanner from '../Components/MainBanner/MainBanner';

const Shop = () => {
  return (
    <div>
      <MainBanner/>
      <Popular/>
      <ExclusiveOffers/>
      <FreshArrivals/>
      <NewsLetter/>
    </div>
  )
}

export default Shop