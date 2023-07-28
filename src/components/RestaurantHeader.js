const RestaurantHeader = ({ resInfo }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-xs font-bold">{resInfo?.info?.name}</h1>
        <div className="text-[9px] mt-3">
          <h1>{resInfo?.info?.cuisines.join(", ")}</h1>
          <h1>
            {resInfo?.info?.areaName},{" "}
            <span>{resInfo?.info?.sla?.lastMileTravelString}</span>
          </h1>
        </div>
      </div>
      <div className="border py-1 px-1 shadow-md rounded-md bg-gray-100">
        <div className="text-[9px] font-bold flex justify-center">
          <span className="pr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{resInfo?.info?.avgRating}</span>
        </div>
        <div className="mt-1">
          <hr className="mt-2 mb-2 w-10 justify-center" />
          <h1 className="text-[8px]">{resInfo?.info?.totalRatingsString}</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
