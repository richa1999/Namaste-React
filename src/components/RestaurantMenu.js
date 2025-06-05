import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import parse from "html-react-parser";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);

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

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">
        {name}
      </h1>
       <div className="text-center border-b-2 box-border ">
       <p>{avgRating}⭐ ({totalRatingsString}) . {costForTwoMessage}</p>
        <p className="text-xs">{cuisines.join(",")}</p>
        <h5 className="text-sm pt-7 pb-1">
          {sla.minDeliveryTime} - {sla.maxDeliveryTime} min
        </h5>
        <p className="text-xs">{expectationNotifiers && parse(expectationNotifiers[0].enrichedText)}</p>
       </div>
      {categories.map((category, index) => {
        return <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showItems ? true : false} setShowItems={() => setShowItems(index)}/>;
      })}
  </div>
);
};

export default RestaurantMenu ;
