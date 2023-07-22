import { IMG_CDN_LINK } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, avgRating, cloudinaryImageId, cuisines } = restaurant.info;

  return (
    <div className="rounded-lg hover:shadow-lg cursor-pointer hover:rounded-3xl">
      <div className="w-52 h-36 rounded-2xl m-2">
        <img
          src={IMG_CDN_LINK + cloudinaryImageId}
          alt="Restaurant Image"
          className="w-52 h-36 rounded-2xl"
        />
      </div>
      <div className="px-3 my-2 w-56">
        <h1 className="text-xs font-semibold">{name}</h1>
        <div className="flex my-1 items-center">
          <span className="bg-green-700 border-gray-500 text-white h-3 w-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 18"
              fill="currentColor"
              class="w-3 h-2"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              />
            </svg>
          </span>{" "}
          <h1 className="text-[9px] font-semibold px-1"> {avgRating}</h1>
        </div>
        <h1 className="text-[9px] font-mono text-gray-600">
          {cuisines.join(", ")}
        </h1>
      </div>
    </div>
  );
};

export default RestaurantCard;
