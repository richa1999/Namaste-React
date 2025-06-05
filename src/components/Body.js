import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withOfferCard } from "./RestaurantCard";
import Shimmer from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListRestaurants] = useState([]);
  const [filerRestaurants, setFilerRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showTopRatedOnly, setShowTopRatedOnly] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantCardWithOffer = withOfferCard(RestaurantCard);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurants =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListRestaurants(restaurants);
    setFilerRestaurants(restaurants);
  };

  const toggleTopRated = () => {
  const newToggleState = !showTopRatedOnly;
  setShowTopRatedOnly(newToggleState);

  if (newToggleState) {
    const topRated = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilerRestaurants(topRated);
  } else {
    setFilerRestaurants(listOfRestaurants);
  }
};


  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-xl mt-6">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 md:px-10 py-6 max-w-screen-xl mx-auto">
      {/* Filter/Search */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        {/* Search */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            data-testid="search-input"
          />
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition"
           onClick={() => {
            const filtered = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilerRestaurants(filtered.length ? filtered : listOfRestaurants);
            setSearchText(""); // 🔁 Reset the input
          }}
          >
            Search
          </button>
        </div>

          <button
            className={`px-4 py-2 rounded-md text-white transition ${
              showTopRatedOnly ? "bg-green-600" : "bg-green-400"
            }`}
            onClick={toggleTopRated}
          >
            {showTopRatedOnly ? "Show All Restaurants" : "Show Top Rated Only"}
          </button>
       
        {/* <input
          className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-auto focus:outline-none"
          type="text"
          value={loggedInUser}
          onChange={(e) => setusername(e.target.value)}
        /> */}
      </div>

      {/* Restaurant Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filerRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="block transform hover:scale-[1.02] transition duration-200"
          >
            {(restaurant.info.aggregatedDiscountInfoV3 ||
              restaurant.info.aggregatedDiscountInfoV2) ? (
              <RestaurantCardWithOffer restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
