import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addToCart(item));
  };

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="max-w-3xl mx-auto my-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div
        className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100 rounded-t-lg select-none"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg text-gray-800">
          {data.title} <span className="text-gray-500">({data.itemCards.length})</span>
        </span>
        <span
          className={`transform transition-transform duration-300 text-xl text-gray-600 select-none`}
          style={{ transform: showItems ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ⬇️
        </span>
      </div>

      {showItems && (
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-lg">
          <ItemList
            items={data.itemCards}
            buttonText={"➕ Add"}
            handleClick={handleAddClick}
          />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
