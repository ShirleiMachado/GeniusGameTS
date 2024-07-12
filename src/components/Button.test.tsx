import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

test("renders Button and triggers onClick", () => {
  const handleClick = jest.fn();
  render(<Button color="red" onClick={handleClick} />);

  const button = screen.getByRole("button");
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
