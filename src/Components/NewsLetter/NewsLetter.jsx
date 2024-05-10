import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Receba ofertas exclusivas em seu e-mail</h1>
        <p>Assine nossa newsletter e fique atualizado</p>
        <div>
            <input type="email" placeholder="Seu E-mail" />
            <button>Se-inscrever</button>
        </div>
    </div>
  )
}

export default NewsLetter