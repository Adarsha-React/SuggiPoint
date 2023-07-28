import { useContext, useEffect, useState } from "react";
import { RES_CDN_LINK } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { filterRestaurants } from "../utils/helpers";
import TopRestaurants from "./TopRestaurants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [topRestaurants, setTopRestaurants] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData(RES_CDN_LINK);
  }, []);

  const fetchRestaurantData = async (RES_CDN_LINK) => {
    const data = await fetch(RES_CDN_LINK);
    const json = await data.json();
    setListOfRestaurant(
      json.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setTopRestaurants(json?.data?.cards[2]?.card?.card);
  };

  return !filteredRestaurants ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-4/5 p-2 mx-auto">
      <div className="border-b border-gray-300 mt-2">
        <input
          type="text"
          placeholder="Search"
          className="text-xs w-1/3 p-1 m-2 border border-gray-400 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="text-xs px-3 py-1 bg-orange-400 text-white font-bold rounded-sm"
          onClick={() => {
            const filterData = filterRestaurants(listOfRestaurant, searchText);
            setFilteredRestaurants(filterData);
          }}
        >
          Search
        </button>
      </div>
      {/* <div className="border-t border-gray-300 mt-2">
        <TopRestaurants restaurants={topRestaurants} />
      </div> */}

      <div>
        <h1 className="font-bold my-3">
          Restaurants with online food delivery in Bangalore
        </h1>
        <div className="flex flex-wrap gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
