import { Link } from "react-router-dom";
import AppLogo from "../assests/images/AppLogo.jpg";

const Title = () => {
  return (
    <div className="cursor-pointer">
      <a href="/">
        <img src={AppLogo} alt="App Logo" className="w-10" />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="shadow-md my-3">
      <div className="flex justify-between items-center p-2 w-4/5 mx-auto">
        <Title />
        <div>
          <div className="flex text-gray-600">
            <h1 className="mx-7 text-xs font-semibold cursor-pointer  hover:text-orange-600">
              <Link to="/about"> About </Link>
            </h1>
            <h1 className="mx-7 text-xs font-semibold cursor-pointer  hover:text-orange-600">
              Sign In
            </h1>
            <h1 className="mx-7 text-xs font-semibold cursor-pointer hover:text-orange-600">
              <span className="border border-gray-500 rounded-md px-1 hover:bg-orange-500 text-white bg-green-600">
                0
              </span>{" "}
              Cart
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
