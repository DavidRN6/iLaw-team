import { AiFillHome } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="tab-nav overflow-x-auto flex border-b border-border pt-4">
      <NavLink
        to="/"
        className="tab-link flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent transition duration-200"
      >
        <AiFillHome className="text-xl" />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/features"
        className="tab-link flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent transition duration-200"
      >
        <FaStar className="text-lg" />
        <span>Features</span>
      </NavLink>

      <NavLink
        to="/nexus"
        className="tab-link flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent transition duration-200"
      >
        <FaUniversity className="text-lg" />
        <span>Nexus</span>
      </NavLink>


      <NavLink
        to="/team"
        className="tab-link flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent transition duration-200"
      >
        <RiTeamFill className="text-lg" />
        <span>Team</span>
      </NavLink>

      <NavLink
        to="/contact"
        className="tab-link flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent"
      >
        <MdEmail className="text-lg" />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
