import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  return (
    <header className="container px-6 mx-auto py-3 flex justify-between items-center bg-navbar">
      <NavLink to="/" className="flex items-center gap-2">
        <img src={assets.logo_icon} alt="Logo" className="w-10 lg:w-12" />
        <h1 className="text-2xl font-bold">iLaw</h1>
      </NavLink>

      <div>
        <FaMoon className="text-xl" />
      </div>
    </header>
  );
};

export default Header;
