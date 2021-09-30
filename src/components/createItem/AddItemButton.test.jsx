import { render, screen, fireEvent } from "@testing-library/react";
import { ListProvider } from "../../states/ListProvider";
import AddItemButton from "./AddItemButton";
import App from "../../App";
test("Render button", () => {
  //Arrange

  render(<AddItemButton />);
  //Assert
  const buttonElement = screen.getByText(/Add Item/i);
  //Act
  expect(buttonElement).toBeInTheDocument();
});
// test("Fire an event", () => {
//   //Arrange
//   const modal = document.createElement("div");
//   modal.setAttribute("id", "add-form-root");
//   document.body.appendChild(modal);
//   render(
//     <ListProvider>
//       <App />
//     </ListProvider>
//   );
//   //Assert

//   const buttonElement = screen.getByText(/Add Item/i);
//   fireEvent.click(buttonElement);
//   const labelProductName = screen.getByText(/Add/i);
//   //Act
//   expect(modal).toContainElement(labelProductName);
// });
