import { useEffect, useState } from "react";
import { RES_CDN_LINK } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { list } from "postcss";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurantData(RES_CDN_LINK);
  }, []);

  const fetchRestaurantData = async (RES_CDN_LINK) => {
    const data = await fetch(RES_CDN_LINK);
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(listOfRestaurant);
  return !listOfRestaurant ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-4/5 p-2 mx-auto flex flex-wrap gap-3">
      {listOfRestaurant.map((restaurant) => (
        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Body;
