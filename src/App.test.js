import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { ReserveTable } from "./pages";

describe("Reserve Table Form", () => {
  test("User is able to submit if comment is greater than 10", () => {
    const comments = "we would like red wine, please";
    const handleSubmit = jest.fn();
    render(<ReserveTable onSubmit={handleSubmit} />);

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comments } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({ comments });
  });
});
