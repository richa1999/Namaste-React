import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restaurant?.info;

  return (
    <div className="restaurant-card m-4 p-4 w-[250px] hover:shadow-lg cursor-pointer">
      <img
        className="res-logo w-52 h-52 rounded-lg box-border shadow-inner shadow-black"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="font-extrabold py-4">
        {name}

        <h4 className="text-xs font-light text-black">{costForTwo}</h4>
      </div>

      <div className="flex justify-between font-semibold">
        <div className="">
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
        <h4>{avgRating}⭐</h4>
      </div>
      <h4 className="text-green-900 py-3 font-extralight text-sm">
        {cuisines.join(", ")}
      </h4>
    </div>
  );
};

export const withOfferCard = (RestaurantCard) => {
  return (props) => {
    const { restaurant } = props;
    const offerText =
      restaurant?.info?.aggregatedDiscountInfoV3 ||
      restaurant?.info?.aggregatedDiscountInfoV2;
    return (
      <div>
        <p className="absolute leading-6 p-9 mt-40 font-extrabold text-lg text-white">
          {offerText.header} {offerText.subHeader}
        </p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
