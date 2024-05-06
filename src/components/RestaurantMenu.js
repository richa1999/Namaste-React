import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      RES_MENU + resId
    );
    const json = await response.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <h2>Menu</h2>
      {itemCards.map((item) => (
        <li>
            {item.card.info.name} - Rs. {item.card.info.price/100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
