import Button from "./Button.jsx"
import { render } from "@testing-library/react";

it("Should render the button", () => {
    const {asFragment} = render(<Button/>)
    expect(asFragment(<Button />)).toMatchSnapshot()
  });