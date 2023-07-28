import ItemCard from "./ItemCard";

const RestaurantMenuCategory = ({ itemCategories }) => {
  console.log(itemCategories);
  return (
    <div>
      {itemCategories.map((itemCategory) => (
        <div key={itemCategory?.card?.card?.title} className="border-b-8">
          <h1 className="text-xs text-gray-600 font-bold">
            {itemCategory?.card?.card?.title} (
            {itemCategory?.card?.card?.itemCards.length})
          </h1>

          <div>
            <ItemCard itemcards={itemCategory?.card?.card?.itemCards} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCategory;
