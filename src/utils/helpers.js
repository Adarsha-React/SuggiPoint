export const filterRestaurants = (listOfRestaurant, searchText) => {
  const filterData = listOfRestaurant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
};
