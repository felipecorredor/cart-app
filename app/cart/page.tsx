import React from "react";
import { products } from "../api/products";

import CartList from "./cartList";

const CartPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-3 py-20">
      <CartList products={products} />
      <div className="font-bold text-xl">Nuestras recomendaciones</div>
    </main>
  );
};

export default CartPage;
