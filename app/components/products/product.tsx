import { ProductType } from "@/app/@types/product";
import React from "react";

const Product = ({
  name,
  unitPrice,
  quantity,
  isAvailable,
  id,
}: ProductType) => {
  const totalPrice = unitPrice * quantity;

  return (
    <div className="flex justify-between gap-10 pt-10 px-8 border-b-[1px] pb-8">
      <div className="font-bold w-40 overflow-hidden whitespace-nowrap text-ellipsis">
        {name}
      </div>
      {/* <div data-testid="unit-price">${unitPrice}</div> */}
      <div data-testid={`unit-price-${id}`}>${unitPrice}</div>

      <div>{quantity}</div>

      <div className="w-40">
        <span className={`${isAvailable ? "text-green-500" : "text-red-500"}`}>
          {isAvailable ? "✓" : "ｘ"}
        </span>{" "}
        {isAvailable ? "Available Now" : "Unavailable Now"}
      </div>

      <div className="font-bold" data-testid={`total-price-${id}`}>
        ${totalPrice}
      </div>
      <div className="text-xl font-bold text-gray-500">ｘ</div>
    </div>
  );
};

export default Product;
