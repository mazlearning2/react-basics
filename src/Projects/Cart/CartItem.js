import { useGlobalContext } from "./CartContext";
const CartItem = ({ id, title, price, image, amount }) => {
  const { removeCartItem, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <div className="cart-item-left">
        <img src={image} alt="" />
        <p>
          <span>{title}</span>
          <span>{price} $</span>
          <span onClick={() => removeCartItem(id)}>remove</span>
        </p>
      </div>
      <div className="cart-item-right">
        <i className="fas fa-angle-up" onClick={() => increase(id)}></i>
        <span>{amount}</span>
        <i className="fas fa-angle-down" onClick={() => decrease(id)}></i>
      </div>
    </article>
  );
};

export default CartItem;
