import { screen, fireEvent } from "@testing-library/react";
import AuthNav from "./index";
import { initialState, UserState } from "../../context/UserContext";
import { customRender } from "../../test/utils";

describe("Auth Nav component", () => {
  let wrapper = (state?: UserState) =>
    customRender(<AuthNav />, {
      wrapperProps: { userState: state },
    });

  it("should render Auth Nav component", () => {
    expect(wrapper()).toMatchSnapshot();
  });
  describe("if user is not logged in", () => {
    it("should render Sign In link", () => {
      wrapper();
      const linkElement = screen.getByText(/Sign In/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
  describe("if user is logged in", () => {
    it("should render Sign Out link", () => {
      wrapper({ ...initialState, isLoggedIn: true });
      const linkElement = screen.getByText(/Sign Out/i);
      expect(linkElement).toBeInTheDocument();
    });
    it("on sign out link click", () => {
      wrapper({ ...initialState, isLoggedIn: true });
      const signOutLink = screen.getByText(/Sign Out/i);
      fireEvent.click(signOutLink);
      const signInLink = screen.getByText(/Sign In/i);
      expect(signInLink).toBeInTheDocument();
    });
  });
});
