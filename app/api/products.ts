import { ProductType } from "../@types/product";

export const products: ProductType[] = [
  {
    id: 1,
    name: "Smart Watch",
    unitPrice: 10,
    quantity: 1,
    isAvailable: true,
  },
  {
    id: 2,
    name: "iPhone 15 pro max",
    unitPrice: 15,
    quantity: 3,
    isAvailable: true,
  },
  {
    id: 3,
    name: "MackBook Pro",
    unitPrice: 20,
    quantity: 2,
    isAvailable: false,
  },
  {
    id: 4,
    name: "iMac",
    unitPrice: 30,
    quantity: 3,
    isAvailable: false,
  },
];
