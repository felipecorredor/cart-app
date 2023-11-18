import React from "react";
import { ProductType } from "../@types/product";
import Product from "../components/products/product";
import useTotalPrices from "../hooks/useTotalPrices";

interface CartListProps {
  products: ProductType[];
}

const CartList = ({ products }: CartListProps) => {
  const prices = products.map(
    ({ quantity, unitPrice }) => quantity * unitPrice
  );

  const { totalPrice } = useTotalPrices(prices);

  return (
    <>
      <div className="flex justify-between bg-gray-100 px-8 py-5">
        <div className="font-bold">Total Products: {products.length}</div>
        <div className="font-bold">Cart total: ${totalPrice}</div>
      </div>

      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}

      <div className="flex flex-row-reverse pt-10">
        <button className="py-4 px-10 bg-black text-white rounded-md font-bold uppercase text-sm">
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartList;
