import Shimmer from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import parse from "html-react-parser";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

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

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Restaurant Title */}
      <h1 className="font-extrabold text-3xl mb-4 text-gray-900">{name}</h1>

      {/* Info Section */}
      <div className="border-b border-gray-300 pb-6 mb-6">
        <p className="text-lg font-semibold text-yellow-600">
          {avgRating}⭐ <span className="text-gray-600">({totalRatingsString})</span>
          <span className="mx-2">·</span> <span>{costForTwoMessage}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-700 mt-3 font-medium">
          Delivery Time: {sla.minDeliveryTime} - {sla.maxDeliveryTime} mins
        </p>
        {expectationNotifiers && expectationNotifiers.length > 0 && (
          <p className="text-xs text-gray-500 mt-2 italic">
            {parse(expectationNotifiers[0].enrichedText)}
          </p>
        )}
      </div>

      {/* Categories */}
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title || index}
            data={category?.card?.card}
            showItems={index === showItems}
            setShowItems={() =>
              setShowItems(index === showItems ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
