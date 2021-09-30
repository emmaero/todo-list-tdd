import { render, screen } from "@testing-library/react";
import ModalContainer from "./ModalContainer";
import AddItemForm from "./createItem/AddItemForm";
import { ListProvider } from "../states/ListProvider";

test("Should render component", () => {
  const root = document.createElement("div");
  root.setAttribute("id", "add-form-root");
  document.body.appendChild(root);
  render(
    <ListProvider>
      <ModalContainer showModal={<AddItemForm />} />
    </ListProvider>
  );
  const buttonElement = screen.getByText(/X/);
  expect(buttonElement).toBeInTheDocument();
});
