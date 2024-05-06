import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// Whenever state variables update, react triggers a reconcilition cycle(re-renders the component)
const Body = () => {
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
  const [listOfRestaurants, setListRestaurants] = useState([]);
  const [filerRestaurants, setFilerRestaurants] = useState([]);

  const onClickHandler = () => {
    setFilerRestaurants(
        listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.5)
    );
  };

  const [searchText, setSearchText] = useState("");

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
          <button onClick={() => {
            const filerRestaurants = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
            filerRestaurants.length !== 0 ? setFilerRestaurants(filerRestaurants) : setFilerRestaurants(listOfRestaurants);
          }}>Search</button>
        </div>
        <button className="filter" onClick={onClickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant">
        {filerRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
