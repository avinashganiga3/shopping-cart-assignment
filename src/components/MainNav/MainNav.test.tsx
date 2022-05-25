import { screen } from "@testing-library/react";
import MainNav from "./index";
import { customRender } from "../../test/utils";

describe("Main Nav component", () => {
  let wrapper = () => customRender(<MainNav />);

  it("should render Main Nav component", () => {
    expect(wrapper()).toMatchSnapshot();
  });
  it("should render product page link", () => {
    wrapper();
    const linkElement = screen.getByText(/Products/i);
    expect(linkElement).toBeInTheDocument();
  });
});
