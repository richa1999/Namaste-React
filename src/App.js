import React, {useState} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import restaurants from "./utils/mockData";

const AppLayout = () => {
	const [topRestaurants, setTopRestaurants] = useState(restaurants);
	const onClickHandler = () => {
		const topRestaurants = restaurants.filter((restaurant) => restaurant.info.avgRating > 4);
		setTopRestaurants(topRestaurants);
	}
	return <div className="app">
		<Header />
		<Body restaurants={topRestaurants} onClickHandler={onClickHandler} />
	</div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
