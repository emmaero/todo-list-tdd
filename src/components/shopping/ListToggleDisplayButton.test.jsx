import { render, screen, fireEvent } from "@testing-library/react";
import ListToggledDisplayButton from "./ListToggledDisplayButton";

test("Should display View items ", () => {
  render(<ListToggledDisplayButton acquiredStatus={false} />);

  const buttonElement = screen.getByText(/View items/i);

  expect(buttonElement).toBeInTheDocument();
});
test("Should display View completed items ", () => {
  render(<ListToggledDisplayButton acquiredStatus={true} />);

  const buttonElement = screen.getByText(/View completed items/i);

  expect(buttonElement).toBeInTheDocument();
});
test("Should fire an event ", () => {
  const fakeMethod = jest.fn();
  render(
    <ListToggledDisplayButton onShowList={fakeMethod} acquiredStatus={true} />
  );

  const buttonElement = screen.getByText(/View completed items/i);
  fireEvent.click(buttonElement);

  expect(fakeMethod).toHaveBeenCalledTimes(1);
});
