import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    restaurant?.info;

  return (
    <div className="restaurant-card m-4 p-4 w-[250px] hover:shadow-lg cursor-pointer">
      <img
        className="res-logo w-52 h-52 rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="text-xs font-light text-black">{costForTwo}</h4>
      <h3 className="font-extrabold py-4">{name}</h3>
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

export default RestaurantCard;
