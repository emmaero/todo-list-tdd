import { render, screen, fireEvent } from "@testing-library/react";

import { ListProvider } from "../../states/ListProvider";
import ShoppingScreen from "./ShoppingScreen";

test("Should render title Eika shopping list", () => {
  render(
    <ListProvider>
      <ShoppingScreen />
    </ListProvider>
  );
  //Act
  const headingElement = screen.getByText(/Eika shopping list/i);
  //Assert
  expect(headingElement).toBeInTheDocument();
});

test("Should render shopping list items", async () => {
  //Arrange
  const mockLocalStorageData = [
    {
      name: "coffee table",
      price: "999",
      id: "8989",
      acquired: false,
    },
    {
      name: "TV stand",
      price: "2000",
      id: "8787",
      acquired: false,
    },
  ];
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(mockLocalStorageData);
  });
  render(
    <ListProvider>
      <ShoppingScreen />
    </ListProvider>
  );
  //Act
  const itemElement1 = screen.getByText(/coffee table/i);
  const itemElement2 = screen.getByText(/TV stand/i);

  //Assert
  expect(itemElement1).toBeInTheDocument();
  expect(itemElement2).toBeInTheDocument();
});
test("Should toggle acquired list", async () => {
  //Arrange
  const mockLocalStorageData = [
    {
      name: "coffee table",
      price: "999",
      id: "8989",
      acquired: false,
    },
    {
      name: "TV stand",
      price: "2000",
      id: "8787",
      acquired: true,
    },
  ];
  Storage.prototype.getItem = jest.fn(() => {
    return JSON.stringify(mockLocalStorageData);
  });
  render(
    <ListProvider>
      <ShoppingScreen />
    </ListProvider>
  );
  //Act
  const buttonElement = screen.getByText(/View completed items/i);
  fireEvent.click(buttonElement);
  const itemElement2 = screen.getByText(/TV stand/i);
  //Assert
  expect(itemElement2).toBeInTheDocument();
});
