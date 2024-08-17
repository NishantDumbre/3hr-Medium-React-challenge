import React, { useState } from "react";
import Header from "./components/Header/Header";
import CandyForm from "./components/Candies/CandyForm";
import AvailableCandies from "./components/Candies/AvailableCandies";
import CandyProvider from "./store/CandyProvider";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartShown, isCartShown] = useState(false)

  const showCartHandler = () =>{
    isCartShown((prevState)=> !prevState)
  }

  return (
    <CartProvider>
      <CandyProvider>
        {cartShown && <Cart onClick={showCartHandler} />}
        <Header onShow={showCartHandler} />
        <CandyForm />
        <AvailableCandies />
      </CandyProvider>
    </CartProvider>
  );
}

export default App;
