import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingItem from "./ShoppingItem";
import { ListProvider } from "../../states/ListProvider";

test("Should checked checkbox when item acquired is true", () => {
  // Arrange
  const fakeChecked = true;
  const fakeMethod = jest.fn();
  render(
    <ListProvider>
      <ShoppingItem acquired={fakeChecked} onAcquired={fakeMethod} />
    </ListProvider>
  );
  const itemCheckboxElement = screen.getByTestId("checkbox");
  expect(itemCheckboxElement).toBeChecked();
});
test("Should unchecked checkbox when item acquired is true", () => {
  // Arrange
  const fakeChecked = false;
    const fakeMethod = jest.fn();
  render(
    <ListProvider>
      <ShoppingItem acquired={fakeChecked} onAcquired={fakeMethod} />
    </ListProvider>
  );
  const itemCheckboxElement = screen.getByTestId("checkbox");
  expect(itemCheckboxElement.checked).toBe(false);
});
test("Should call a method on item checkbox changes", () => {
  // Arrange
  const fakeChecked = true;
  const fakeMethod = jest.fn();
  render(
    <ListProvider>
      <ShoppingItem acquired={fakeChecked} onAcquired={fakeMethod} />
    </ListProvider>
  );

  const itemCheckboxElement = screen.getByTestId("checkbox");
  fireEvent.click(itemCheckboxElement);
  expect(fakeMethod).toHaveBeenCalledTimes(1);
});
