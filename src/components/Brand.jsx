import "./Brand.css";
import { BrandImgM, BrandImgD } from "../assets";

function Brand() {
  return (
    <div className="BrandContainer">
      <div className="BrandContainer-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={BrandImgM} />
          <source media="(min-width:769px)" srcSet={BrandImgD} />
          <img src={BrandImgM} alt="brand" />
        </picture>
      </div>
      <div className="BrandContainer-TxtBox">
        <h1 className="BrandContainer-TxtBox-Title">Transform your brand</h1>
        <p className="BrandContainer-TxtBox-Para">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className="BrandContainer-TxtBox-Btn">Learn more</button>
      </div>
    </div>
  );
}
export default Brand;
