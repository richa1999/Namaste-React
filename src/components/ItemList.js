import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items, buttonText, handleClick }) => {
  return items.map((item) => (
    <div
      key={item.card.info.id}
      data-testid="food-items"
      className="w-full flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl border border-gray-200 shadow-lg mb-6 overflow-hidden"
    >
      <div className="p-6 md:p-8 flex-1 text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {item.card.info.name}
        </h3>
        <p className="text-lg font-bold text-yellow-700 mb-1">
          ₹
          {item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100}
        </p>
        <p className="text-sm font-semibold text-yellow-600 mb-2">
          ⭐{item.card.info?.ratings?.aggregatedRating?.rating || "N/A"} (
          {item.card.info?.ratings?.aggregatedRating?.ratingCount || 0})
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.card.info?.description || "No description available."}
        </p>
      </div>

      <div className="flex flex-col items-center p-4 md:p-6 space-y-4 md:space-y-6">
        <img
          className="w-40 h-32 md:w-52 md:h-40 rounded-lg object-cover shadow-md"
          src={MENU_ITEM_URL + item.card.info.imageId}
          alt={item.card.info.name}
        />
        <button
          className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200 text-gray-900 font-semibold px-6 py-2 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => handleClick(item)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  ));
};

export default ItemList;
