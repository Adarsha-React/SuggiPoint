import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_LINK } from "../utils/constants";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);

  const params = useParams(); // Retrieve the URL information
  const { resId } = params; // Obejct destructuring

  useEffect(() => {
    fetchMenuDetails(RES_MENU_LINK);
  }, []);

  const fetchMenuDetails = async (RES_MENU_LINK) => {
    const data = await fetch(RES_MENU_LINK + resId);
    const json = await data.json();
    setRestaurant(json?.data);
  };

  if (restaurant?.length === 0) return null;

  console.log(restaurant);

  const resInfo = {
    info: restaurant?.cards[0]?.card?.card?.info,
    itemCategoryList:
      restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  };

  const itemCategoryType =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const filteredItemCategories = resInfo?.itemCategoryList?.filter(
    (item) => item.card.card["@type"] === itemCategoryType
  );

  return !restaurant ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-2/5 mx-auto">
      <RestaurantHeader resInfo={resInfo} />
      <div className="border-t border-dashed border-gray-300 mt-3">
        <div className="my-2">
          <RestaurantMenuCategory itemCategories={filteredItemCategories} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
