import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"; 
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_RES_DATA from "../../mocks/resMenuDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";  

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_DATA),
  });
});

describe("Cart", () => {
  test("Should render Menu component with props data", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>{" "}
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText('Match Day Combo (12)');
    fireEvent.click(accordionHeader);

    const menuItem = screen.getAllByTestId('food-items');

    expect(menuItem).toHaveLength(12);

    const addToCartButton = screen.getAllByRole('button', {name: '➕Add'});
    expect(screen.getByText('Cart - 0 items')).toBeInTheDocument();

    fireEvent.click(addToCartButton[0]);

    expect(screen.getByText('Cart - 1 items')).toBeInTheDocument();
    fireEvent.click(addToCartButton[1]);
    expect(screen.getByText('Cart - 2 items')).toBeInTheDocument(); 

    expect(screen.getAllByTestId('food-items')).toHaveLength(14 );

    const clearButton = screen.getByRole('button', {name: 'Clear Cart'});
    fireEvent.click(clearButton);
    expect(screen.getAllByTestId('food-items')).toHaveLength(12);
    expect(screen.getByText('Cart is Empty. Add Items in Cart!!')).toBeInTheDocument();
  });
});
