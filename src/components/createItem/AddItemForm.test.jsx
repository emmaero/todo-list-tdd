import { render, screen} from "@testing-library/react";
import { ListProvider } from "../../states/ListProvider";
import AddItemForm from "./AddItemForm";
test("Should render on screen", () => {
    // Arrange
    render(
      <ListProvider>
        <AddItemForm />
      </ListProvider>
    );
    // Act
    const textElement = screen.getByText(/Product name/i);

    //Assert
    expect(textElement).toBeInTheDocument();
})