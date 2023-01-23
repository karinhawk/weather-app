import Nav from "./Nav.jsx"
import { render } from "@testing-library/react";

it("Should render the nav", () => {
    const weatherData = {
        location: "London"
    }
    const {asFragment} = render(<Nav weatherData={weatherData}/>)
    expect(asFragment(<Nav />)).toMatchSnapshot()
  });