import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantInfo(resId);
  
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
