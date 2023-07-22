import { useEffect, useState } from "react";
import { RES_CDN_LINK } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

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

  return !listOfRestaurant ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-4/5 p-2 mx-auto border-t border-gray-300 my-4 ">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="text-xs w-1/3 p-1 m-2 border border-gray-400 outline-none"
        />
        <button className="text-xs px-3 py-1 bg-orange-400 text-white font-bold rounded-sm">
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
