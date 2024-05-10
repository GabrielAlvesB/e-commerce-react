import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

import remove_icon from "../../../public/Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeToCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p className="cartitems-format-main-mobile">Produtos</p>
        <p>Título</p>
        <p className="cartitems-format-main-mobile">Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p className="cartitems-format-main-mobile">R${e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>R${e.new_price*cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Totais do carrinho</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtatal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Taxa de Envio</p>
              <p>Grátis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>R${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Finalizar Compra!</button>
        </div>
        <div className="cartitems-promocode">
          <p>Se você tiver um código promocional, insira-o aqui</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
