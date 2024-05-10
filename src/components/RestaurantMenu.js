import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import parse from "html-react-parser";
import { MENU_ITEM_URL } from "../utils/constants";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    expectationNotifiers,
  } = resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card
      .itemCards;
  return (
    <div className="px-52 mx-20 items-center text-center md:px-10 sm:px-10">
      <div className=" md:px-32">
        <h1 className="pt-12 pr-24 pb-6 text-left font-extrabold text-2xl">
          {name}
        </h1>
        <div className="w-full h-44 shadow-2xl text-left rounded-2xl border border-solid">
          <div className="font-normal p-10">
            {avgRating}⭐ ({totalRatingsString}) . {costForTwoMessage}
            <p className="text-xs">{cuisines.join(",")}</p>
            <h5 className="text-sm pt-7 pb-1">
              {sla.minDeliveryTime} - {sla.maxDeliveryTime} min
            </h5>
            <hr />
            <p className="text-xs">{parse(expectationNotifiers[0].text)}</p>
          </div>
        </div>
      </div>
      <hr className="p-5"/>
      <Accordion>
        <AccordionSummary className="font-bold">
          <h1>RESTAURANT MENU</h1>
        </AccordionSummary>
        <AccordionDetails>
          {itemCards.map((item) => (
            <div className="w-full shadow-2xl text-left rounded-2xl border border-solid flex justify-between">
              <div className="font-bold p-10">
                {item.card.info.name}
                <p className="text-sm">Rs. {item.card.info.price / 100}</p> 
               <p className="text-xs">
                  ⭐{item.card.info?.ratings?.aggregatedRating?.rating}(
                  {item.card.info?.ratings?.aggregatedRating?.ratingCount})
                </p> 
              </div>
              <div className="items-center">
                <img
                  className="w-52 h-40 pr-5 pt-5"
                  src={MENU_ITEM_URL + item.card.info.imageId}
                  alt="menu-item"
                />
                <button className="bg-yellow-400 p-2 rounded-2xl ml-16">
                  ➕Add
                </button>
              </div>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RestaurantMenu;
