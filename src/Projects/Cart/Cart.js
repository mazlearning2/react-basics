import { useState } from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import cartItemsData from "./cartData";
import { CartProvider, useGlobalContext } from "./CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartItems = Array.from(cart.entries());

  return (
    <>
      <CartHeader />
      <main className="cart-main">
        <h1 className="cart-main-title">YOUR BAG</h1>
        {cartItems.length === 0 ? (
          <h4 className="cart-main-empty">Empty...</h4>
        ) : (
          <section className="cart-main-content">
            <div className="cart-main-content-items">
              {cartItems.map((cartItem) => {
                const [id, item] = cartItem;
                return <CartItem key={id} {...item} />;
              })}
            </div>
            <div className="cart-main-content-total">
              <span>Total</span>
              <span>{totalCost.toFixed(2)}$</span>
            </div>
            <button
              className="cart-main-content-clear"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </section>
        )}
      </main>
    </>
  );
};

export default Cart;
