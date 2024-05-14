import { MENU_ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
    items.map((item) => (
        <div className="w-full shadow-2xl text-left rounded-2xl border border-solid flex justify-between">
          <div className="p-10">
            {item.card.info.name}
            <p className="text-sm font-bold">₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/ 100}</p>
            <p className="text-xs font-bold">
              ⭐{item.card.info?.ratings?.aggregatedRating?.rating}(
              {item.card.info?.ratings?.aggregatedRating?.ratingCount})
            </p>
            <p className="text-xs">{item.card.info?.description}</p>
          </div>
          <div className="items-center">
            <img
              className="w-52 h-40 pr-5 pt-5"
              src={MENU_ITEM_URL + item.card.info.imageId}
              alt="menu-item"
            />
            <button className="bg-yellow-400 p-2 rounded-2xl ml-16">
              ➕Add
            </button>
          </div>
        </div>
      ))
    );
};

export default ItemList;