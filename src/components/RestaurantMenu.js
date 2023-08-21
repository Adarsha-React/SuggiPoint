import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  return (
    <div>
      <h1>Restaurant Menu - {resId}</h1>
    </div>
  );
};

export default RestaurantMenu;
