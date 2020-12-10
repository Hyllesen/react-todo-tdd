import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Add todo item", () => {
  render(<App />);
  const todoInput = screen.getByPlaceholderText(/enter todo item/i);
  userEvent.type(todoInput, "Wash the dishes{enter}");
  const todoItem = screen.getByText("Wash the dishes");
});
