import { render, screen } from "@testing-library/react";
import ContactPage from "../ContactPage";
import "@testing-library/jest-dom";


describe("ContactPage", () => {

    beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterEach(() => {
        console.log("After Each");
    });

    afterAll(() => {
        console.log("After All"); 
    });

test("renders ContactPage", () => {
    render(<ContactPage />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("renders ContactPage button", () => {
    render(<ContactPage />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("renders ContactPage input for name", () => {
    render(<ContactPage />);

    const name = screen.getByPlaceholderText("Name");

    expect(name).toBeInTheDocument();
});

test("Should load 2 input boxes on Contact Page", () => {
    render(<ContactPage />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes).toHaveLength(3);
});

});