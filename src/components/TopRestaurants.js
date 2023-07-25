import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Carousel from "./Carousel";

const TopRestaurants = ({ restaurants }) => {
  let topRestaurants = restaurants?.gridElements?.infoWithStyle?.restaurants;

  return (
    <div>
      <h1 className="font-bold">{restaurants.header.title}</h1>
      <div className=" flex">
        {topRestaurants.map((restaurant) => (
          <div key={restaurant?.info?.id}>
            <Carousel restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopRestaurants;
