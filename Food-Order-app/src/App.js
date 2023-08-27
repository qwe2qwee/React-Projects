import { useState } from "react";

import Header from "./components/Layout/header";
import Meals from "./components/meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => setCartShow(true);

  const hideCartHandler = () => setCartShow(false);
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler}/>}

      <Header show = {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
