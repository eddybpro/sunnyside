import "./Footer.css";
import { Logo } from "../assets";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
      <a href="#" className="FooterLogo" aria-label="sunnyside">
        <img src={Logo} alt="sunnyside" />
      </a>
      <ul className="FooterLinksBox">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
      </ul>
      <ul className="FooterSocialIconsBox">
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaFacebookSquare />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaInstagram />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaTwitter />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "socialIcon" }}>
            <div>
              <FaPinterest />
            </div>
          </IconContext.Provider>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
