import { TiHome } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="tab-nav overflow-x-auto flex border-b border-gray-200">
      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <TiHome />
        <span>Home</span>
      </button>

      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <FaStar />
        <span>Features</span>
      </button>

      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <FaBookOpen />
        <span>Research</span>
      </button>

      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <FaCirclePlay />
        <span>Demo</span>
      </button>

      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <RiTeamFill />
        <span>Team</span>
      </button>

      <button className="flex items-center gap-2 flex-shrink-0 p-4 border-b-2 border-transparent">
        <MdEmail />
        <span>Contact</span>
      </button>
    </nav>
  );
};

export default Navbar;
