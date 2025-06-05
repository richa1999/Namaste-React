import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
    const dispatch = useDispatch();

    // dispatching an action to add an item to the cart
   const handleAddClick = (item) => {
      dispatch(addToCart(item));
    };
    const handleClick = () => {
        setShowItems();
      };
      return (
        <div>
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div
              className="flex justify-between cursor-pointer"
              onClick={handleClick}
            >
              <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
              </span>
              <span>⬇️</span>
            </div>
    
            {showItems && <ItemList items={data.itemCards} buttonText={"➕Add"} handleClick={handleAddClick}/>}
          </div>
        </div>
      );
    };

export default RestaurantCategory;
