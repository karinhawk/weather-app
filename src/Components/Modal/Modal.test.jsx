import Modal from "./Modal.jsx"
import { getByText, render, screen } from "@testing-library/react";

it("Should render the modal when activated", () => {
    const {asFragment} = render(<Modal/>)
    expect(asFragment(<Modal />)).toMatchSnapshot()
  });

it("Should render the text in the modal", () => {
  render(<Modal />)
  const text = screen.getByText("OPTIONS")
  expect(text).toBeInTheDocument()
});