import {  useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
setCartIsShown(true);
}

const hideCartHandler = () => {
  console.log('dasdaasd');
  setCartIsShown(false);
};

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onCartShown={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
  
}

export default App;
