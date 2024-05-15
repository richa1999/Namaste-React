import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RES_DATA  from "../../mocks/resListMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_DATA),
  });
});

describe("Search", () => {
  test("Should render Body component with search input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch).toHaveLength(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchButton);

    const resCard = screen.getAllByTestId("resCard");

    expect(searchButton).toBeInTheDocument();
    expect(resCard).toHaveLength(2);

  });

  test("Should render Body component with top rated input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter).toHaveLength(20);

    const TopRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });

    fireEvent.click(TopRatedButton);

    const resCard = screen.getAllByTestId("resCard");

    expect(TopRatedButton).toBeInTheDocument();
    expect(resCard).toHaveLength(14);

  });
});
