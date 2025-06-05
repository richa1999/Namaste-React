import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { withOfferCard } from "../RestaurantCard";
import resCardMock from "../../mocks/resCardMock.json";
import '@testing-library/jest-dom';


describe("RestaurantCard", ( ) => {
    test("Should render RestaurantCard Component with props data", () => {
        render(<RestaurantCard restaurant={resCardMock} />);

        const resName = screen.getByText(resCardMock.info.name);

        expect(resName).toBeInTheDocument();
    });

    test("Should render RestaurantCard Component with Offer Text", () => {

        const RestaurantCardWithOffer = withOfferCard(RestaurantCard);
        render(<RestaurantCardWithOffer restaurant={resCardMock}  />);
 
        const resName = screen.getByText(resCardMock.info.aggregatedDiscountInfoV3.header + ' '+ resCardMock.info.aggregatedDiscountInfoV3.subHeader);

        expect(resName).toBeInTheDocument();
    });
});