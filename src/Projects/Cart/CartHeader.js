import { useGlobalContext } from "./CartContext";
const CartHeader = () => {
  const { totalAmount, totalCost } = useGlobalContext();
  return (
    <header className="cart-header">
      <div className="container cart-header-container">
        <h1 className="cart-header-title">UseReducer</h1>
        <span className="cart-header-badge">
          <i className="fas fa-cart-plus"></i>
          <span>{totalAmount}</span>
        </span>
      </div>
    </header>
  );
};

export default CartHeader;
