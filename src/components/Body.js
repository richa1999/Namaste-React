import React from 'react';
import RestaurantCard from './RestaurantCard';

const Body = (props) => {
    const { restaurants, onClickHandler } = props;
    return (
        <div className="body">
            <div className="search">Search</div>
            <button className="filter" onClick={onClickHandler}>Top Rated Restaurants</button>
            <div className="restaurant">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;