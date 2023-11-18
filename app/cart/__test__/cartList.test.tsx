import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartList from "../cartList";

const mockProducts = [
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

    isAvailable: false,
  },
];

describe("validate cart list", () => {
  beforeEach(() => {
    render(<CartList products={mockProducts} />);
  });

  it("should display total product number", () => {
    const totalProducts = screen.getByText("Total Products: 2");
    expect(totalProducts).toBeInTheDocument();
  });

  it("should display the cart total prices", () => {
    const totalPrice = screen.getByText("Cart total: $55");
    expect(totalPrice).toBeInTheDocument();
  });

  it("should render product details", () => {
    const [firstProduct] = mockProducts;

    const totalPrice = firstProduct.quantity * firstProduct.unitPrice;

    const nameProduct = screen.getByText(firstProduct.name);
    const unitPrice = screen.getByTestId(`unit-price-${firstProduct.id}`);
    const quantity = screen.getByText(firstProduct.quantity);
    const price = screen.getByTestId(`total-price-${firstProduct.id}`);
    const availableText = screen.getByText("Available Now");

    expect(nameProduct).toBeInTheDocument();
    expect(unitPrice).toHaveTextContent(`$${firstProduct.unitPrice}`);
    expect(quantity).toBeInTheDocument();
    expect(price).toHaveTextContent(`$${totalPrice}`);
    expect(availableText).toBeInTheDocument();
  });
});
