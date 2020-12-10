import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Todo App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Add todo item by enter key", () => {
    const todoInput = screen.getByPlaceholderText(/enter todo item/i);
    userEvent.type(todoInput, "Wash the dishes{enter}");
    const todoItem = screen.getByText("Wash the dishes");
  });
  test("Add todo item by add todo button", () => {
    const todoInput = screen.getByPlaceholderText(/enter todo item/i);
    userEvent.type(todoInput, "Do the laundry");
    const addTodoButton = screen.getByText(/add todo/i);
    const todoItem = screen.getByText("Do the laundry");
  });
});
