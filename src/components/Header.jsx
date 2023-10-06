import "./Header.css";
import Navbar from "./Navbar";
import { Arrow } from "../assets";

function Header() {
  return (
    <header>
      <Navbar />
      <h1 className="Title">we are creatives</h1>

      <img src={Arrow} alt="" className="ArrowIcon" />
    </header>
  );
}
export default Header;
