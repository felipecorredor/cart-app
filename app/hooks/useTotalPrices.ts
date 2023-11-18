import { useMemo } from "react";

const INITIAL_VALUE = 0;

const useTotalPrices = (prices: number[]) => {
  const totalPrice = useMemo(() => {
    const total = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      INITIAL_VALUE
    );
    return total;
  }, [prices]);

  return {
    totalPrice,
  };
};

export default useTotalPrices;
