import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search.jsx";

it("Should render the searchbar", () => {
    const {asFragment} = render(<Search />)
    expect(asFragment(<Search />)).toMatchSnapshot()
  });

it("Should update input box with each key press", () => {
    render(<Search/>);
  
    const input = screen.getByPlaceholderText("Town... City... Country...");
    userEvent.type(input, "London");
  
    const updatedInput = screen.findByText("London");
    expect(updatedInput).toBeTruthy();
  })

it("Should not display the wrong order of characters based on what was typed", () => {
render(<Search/>);

const input = screen.getByPlaceholderText("Town... City... Country...");
userEvent.type(input, "St Ives");

const updatedInput = screen.queryByText("Ives St");
expect(updatedInput).toBeFalsy();
});