import { render, screen, fireEvent } from "@testing-library/react";
import { ListProvider } from "../../states/ListProvider";
import { sortByName, sortByPrice } from "../../scripts/sorter";
import SortShoppingList from "./SortShoppingList";
jest.mock("../../scripts/sorter");

beforeEach(() => {
  window.localStorage.clear();
});
test("Should call the sortByName function", async () => {
  //Arrange
  render(
    <ListProvider>
      <SortShoppingList />
    </ListProvider>
  );
  //Act
  const buttonElement = screen.getByText(/Name/i);
  fireEvent.click(buttonElement);

  //Assert
  expect(sortByName).toHaveBeenCalledTimes(1);
});
test("Should call the sortByPrice function", async () => {
  //Arrange
  render(
    <ListProvider>
      <SortShoppingList />
    </ListProvider>
  );
  //Act
  const buttonElement = screen.getByText(/Price/i);
  fireEvent.click(buttonElement);

  //Assert
  expect(sortByPrice).toHaveBeenCalledTimes(1);
});
