import { render, screen } from "@testing-library/react";
import WelcomeScreen from "./WelcomeScreen";
test("renders welcome message", () => {
  render(<WelcomeScreen />);
  const linkElement = screen.getByText(/Welcome to EIKA/i);
  expect(linkElement).toBeInTheDocument();
});
