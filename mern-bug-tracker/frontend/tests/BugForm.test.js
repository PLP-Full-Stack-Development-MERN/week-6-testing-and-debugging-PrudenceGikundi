import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("renders bug form", () => {
  render(<BugForm />);
  const titleInput = screen.getByPlaceholderText("Title");
  expect(titleInput).toBeInTheDocument();
});
