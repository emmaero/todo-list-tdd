import { render, screen, fireEvent } from "@testing-library/react";
import { ListProvider } from "../../states/ListProvider";
import AddItemButton from "./AddItemButton";
test("Render button", () => {
  //Arrange
  const fakeMethod = jest.fn();
  render(<AddItemButton />);
  //Assert
  const buttonElement = screen.getByText(/Add Item/i);
  //Act
  expect(buttonElement).toBeInTheDocument();
});
test("Should display modal on when add item button click", () => {
  //Arrange
  const root = document.createElement("div");
  root.setAttribute("id", "add-form-root");
  document.body.appendChild(root);
  render(
    <ListProvider>
      <AddItemButton />
    </ListProvider>
  );
  //Assert

  const buttonElement = screen.getByText(/Add Item/i);
  fireEvent.click(buttonElement);
  const buttonlElement = screen.getByText(/X/);
  //Act
  expect(buttonElement).toBeInTheDocument();
});
