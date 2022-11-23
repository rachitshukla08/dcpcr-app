import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { navlinks } from "../data/data.js";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="mt-5 custom-gradient">
      <div className="px-32 h-16 flex text-center">
        <ul className="flex gap-12 w-full">
          {navlinks.map((link, i) => (
            <li key={i}>
              <Link
                className="custom-link color-white inline-block"
                to={`${link.path}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="ml-auto relative">
            <input
              className="h-6 w-72 px-2 py-4 rounded-md text-slate-900 outline-none"
              type="text"
              placeholder="Search for schemes/services"
            />
            <span className="search-icon absolute">
              <AiOutlineSearch />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
