import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Header", () => {
  test("Should load header with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    // const loginButton = screen.getByText('Login');

    expect(loginButton).toBeInTheDocument()
  });

  test("Should render Header Component with Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart - 0 items");

    //regex also works
    //const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument()
  });

  test("Should render header with login button with changing functionality onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
  });
});
