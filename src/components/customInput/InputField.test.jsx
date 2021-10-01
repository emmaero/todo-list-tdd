import { render, screen, fireEvent } from "@testing-library/react";
import AddItemForm from "../createItem/AddItemForm";
import { ListProvider } from "../../states/ListProvider";
import InputField from "./InputField";
test("Should fire an event on change", () => {
    render(
      <ListProvider>
        <AddItemForm>
          <InputField />
        </AddItemForm>
      </ListProvider>
    );
  const inputElement = screen.getByTestId("name-input");
  expect(inputElement).toBeInTheDocument();
});
