import { render, screen } from "@testing-library/react";
import WelcomeScreen from "./WelcomeScreen";
import { ListProvider } from "../states/ListProvider";

test("renders welcome message", () => {
  render(
    <ListProvider>
      <WelcomeScreen />
    </ListProvider>
  );
  const linkElement = screen.getByText(/Welcome to EIKA/i);
  expect(linkElement).toBeInTheDocument();
});

