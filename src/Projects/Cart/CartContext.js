import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItemsData from "./cartData";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";
const CartContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItemsData.map((cartItem) => [cartItem.id, cartItem])),
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeCartItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};
