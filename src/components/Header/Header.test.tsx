import Header from "./index";
import { customRender } from "../../test/utils";

describe("Header component", () => {
  let wrapper = () => customRender(<Header />);
  it("should render Header component", () => {
    expect(wrapper()).toMatchSnapshot();
  });
});
