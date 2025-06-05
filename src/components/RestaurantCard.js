import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, veg } =
    restaurant?.info;

  // Veg / Non-Veg badge styles
  const vegBadge = (
    <span
      className={`inline-block w-4 h-4 mr-2 rounded-full border-2 ${
        veg ? "border-green-600 bg-green-600" : "border-red-600 bg-red-600"
      }`}
      title={veg ? "Veg" : "Non-Veg"}
      aria-label={veg ? "Vegetarian" : "Non Vegetarian"}
    />
  );

  return (
    <div
      data-testid="resCard"
      className="restaurant-card m-4 p-4 w-[260px] bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 relative"
    >
      <img
        className="res-logo w-full h-52 object-cover rounded-t-lg"
        alt={`${name} logo`}
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="px-3 pt-4 pb-2">
        <div className="flex items-center mb-1">
          {vegBadge}
          <h2 className="text-lg font-semibold text-gray-900 truncate">{name}</h2>
        </div>
        <h4 className="text-xs text-gray-600 mb-2">{cuisines.join(", ")}</h4>

        <div className="flex justify-between items-center text-sm font-medium text-gray-700 mb-1">
          <span>{sla.deliveryTime} mins</span>
          <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-md">
            {avgRating} <span className="ml-1">⭐</span>
          </span>
        </div>

        <div className="text-xs font-light text-gray-500">{costForTwo}</div>
      </div>
    </div>
  );
};

export const withOfferCard = (RestaurantCard) => {
  return (props) => {
    const { restaurant } = props;
    const offerText =
      restaurant?.info?.aggregatedDiscountInfoV3 ||
      restaurant?.info?.aggregatedDiscountInfoV2;

    if (!offerText) return <RestaurantCard {...props} />;

    return (
      <div className="relative">
        <p className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded font-semibold text-xs shadow-lg z-10">
          {offerText.header} {offerText.subHeader}
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
