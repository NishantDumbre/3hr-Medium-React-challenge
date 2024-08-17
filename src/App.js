import React from "react";
import Header from "./components/Header/Header";
import CandyForm from "./components/Candies/CandyForm";
import AvailableCandies from "./components/Candies/AvailableCandies";
import CandyProvider from "./store/CandyProvider";


function App() {
  return (
    <CandyProvider>
      <Header />
      <CandyForm />
      <AvailableCandies />
    </CandyProvider>
  );
}

export default App;
