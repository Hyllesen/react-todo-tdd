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
    expect(todoInput).toHaveValue("");
  });
  test("Add todo item by add todo button", () => {
    const todoInput = screen.getByPlaceholderText(/enter todo item/i);
    userEvent.type(todoInput, "Do the laundry");
    const addTodoButton = screen.getByText(/add todo/i);
    userEvent.click(addTodoButton);
    const todoItem = screen.getByText("Do the laundry");
    expect(todoInput).toHaveValue("");
  });

  test("Add todo item and check it as done", () => {
    const todoInput = screen.getByPlaceholderText(/enter todo item/i);
    userEvent.type(todoInput, "Wash the dishes{enter}");
    const todoItem = screen.getByText("Wash the dishes");
    expect(todoInput).toHaveValue("");
    const checkbox = screen.getByTestId("check-todo");
    userEvent.click(checkbox);
    expect(todoItem).toHaveStyle({ textDecoration: "line-through" });
  });
});
