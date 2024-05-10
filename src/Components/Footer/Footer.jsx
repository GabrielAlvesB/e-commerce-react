import React from 'react'
import './Footer.css'
import footer_logo from '../../../public/Assets/logo-simples.png'
import instagram_icon from '../../../public/Assets/instagram_icon.png'
import pintester_icon from '../../../public/Assets/pintester_icon.png'
import whatsapp_icon from '../../../public/Assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>HDCSHOP</p>
            <ul className="footer-links">
                <li>Empresa</li>
                <li>Produtos</li>
                <li>Escritórios</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer