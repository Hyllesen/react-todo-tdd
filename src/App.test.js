import { render, screen } from "@testing-library/react";
import App from "./App";

test("Add todo item", () => {
  render(<App />);
  const todoInput = screen.getByPlaceholderText(/enter todo item/i);
});
