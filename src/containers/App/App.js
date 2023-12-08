import React from "react";
import ErrorExample from "../../tutorial/useState/ErrorExample";
import UseStateBasic from "../../tutorial/useState/UseStateBasic";
import BirthdayReminder from "../../Projects/BirthdayReminder/BirthdayReminder";
import Tours from "../../Projects/Tours/Tours";
import Review from "../../Projects/Review/Review";
import OurMenu from "../../Projects/OurMenu/OurMenu";
import ColorGenerator from "../../Projects/ColorGenerator/ColorGenerator";
import GroceryBud from "../../Projects/GroceryBud/GroceryBud";
import Cart from "../../Projects/Cart/Cart";
import { CartProvider } from "../../Projects/Cart/CartContext";
import AxiosTutorial from "../../Projects/AxiosTutorial/AxiosTutorial";

const App = () => {
  return (
    <>
      {/* <CartProvider>
        <Cart />
      </CartProvider> */}
      <AxiosTutorial />
    </>
  );
};

export default App;
