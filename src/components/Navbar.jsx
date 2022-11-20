import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { navlinks } from "../data/data.js";

const Navbar = () => {
  return (
    <div className="mt-5 custom-gradient">
      <div className="px-32 h-16 flex text-center">
        <ul className="flex gap-12">
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
