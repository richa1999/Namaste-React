import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Whenever state variables update, react triggers a reconcilition cycle(re-renders the component)
const Body = () => {
  // hooks should be called at the top level of the component
  // hooks should always be put inside the body and not inside any if-else block or outside the component
  const [listOfRestaurants, setListRestaurants] = useState([]);
  const [filerRestaurants, setFilerRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // if no dependecy array is provided, useEffect will run on every render
  // if empty array is provided, useEffect will run only once at initial render
  // if some state variable is provided, useEffect will run whenever that state variable changes
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    setListRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilerRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onClickHandler = () => {
    setFilerRestaurants(
      listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4)
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you're offline!! Please check your internet connection.</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filerRestaurants = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              filerRestaurants.length !== 0
                ? setFilerRestaurants(filerRestaurants)
                : setFilerRestaurants(listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter" onClick={onClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant">
        {filerRestaurants.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard
                restaurant={restaurant}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
