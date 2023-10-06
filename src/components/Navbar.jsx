import "./Navbar.css";
import { useState } from "react";
import { Logo, Menu } from "../assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="Logo" aria-label="sunnyside">
        <img src={Logo} alt="" />
      </a>

      <button className="Menu">
        <img src={Menu} alt="" onClick={() => setIsMenuOpen((prev) => !prev)} />
      </button>

      <ul className={isMenuOpen ? "NavLinks open" : "NavLinks"}>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            about
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            services
          </a>
        </li>
        <li className="NavLinks-Link">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            projects
          </a>
        </li>
        <li className="NavLinks-Link contact">
          <a href="#" onClick={() => setIsMenuOpen((prev) => !prev)}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
