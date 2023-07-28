import { IMG_CDN_LINK } from "../utils/constants";

const ItemCard = ({ itemcards }) => {
  return (
    <div>
      {itemcards?.map((itemCard) => (
        <div key={itemCard?.card?.info?.id}>
          <div className="border-b border-gray-300 flex">
            <div className="my-3 w-10/12">
              <h1 className="text-[10px] font-semibold">
                {itemCard?.card?.info?.name}
              </h1>
              <h1 className="text-[9px]">
                ₹{itemCard?.card?.info?.price / 100}
              </h1>
              <p className="text-[9px] pr-5">
                {itemCard?.card?.info?.description}
              </p>
            </div>
            <div className="w-2/12 my-2">
              <img
                className="w-18 h-16 rounded-md"
                src={IMG_CDN_LINK + itemCard?.card?.info?.imageId}
                alt="image"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
