import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
	const [topRestaurants, setTopRestaurants] = useState([]);
	const onClickHandler = () => {
		const topRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating > 4);
		setTopRestaurants(topRestaurants);
	}
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const data = await response.json();
		console.log(data);
		setTopRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
	}
	return <div className="app">
		<Header />
		<Body restaurants={topRestaurants} onClickHandler={onClickHandler} />
	</div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
