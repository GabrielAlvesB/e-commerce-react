import React from 'react'
import './MainBanner.css'
import hand_icon from '../Assets/desktop-computer.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/p1_img-removebg-preview.png'

const MainBanner = () => {
  return (
    <div className='mainBanner'>
        <div className="mainBanner-left">
            <h2>Novos Computadores e Periféricos</h2>
            <div>
                <div className="mainBanner-icon">
                    <p>Nova</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Coleção</p>
                <p>para todos</p>
            </div>
            <div className="mainBanner-latest-btn">
                <div>Última coleção</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="mainBanner-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default MainBanner