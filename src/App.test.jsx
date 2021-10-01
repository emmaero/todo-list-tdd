import { render, screen } from "@testing-library/react";
import App from "./App";
import { ListProvider } from "./states/ListProvider";

test("Render welcome screen when list is empty", () => {
  const mockData = [];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );
  const textElement = screen.getByText(/Welcome to EIKA/i);
  expect(textElement).toBeInTheDocument();
});

test("Render shopping screen when list not empty", () => {
  const mockItem = {
    name: "coffee table",
    price: "999",
    id: "8989",
    acquired: false
  };
  const mockData = [mockItem];
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));
  render(
    <ListProvider>
      <App />
    </ListProvider>
  );
  const textElement = screen.getByText(/coffee table/i);
  expect(textElement).toBeInTheDocument();
});
