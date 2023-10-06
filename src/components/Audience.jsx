import "./Audience.css";
import { AudienceImgM, AudienceImgD } from "../assets";

function Audience() {
  return (
    <div className="AudienceContainer">
      <div className="AudienceContainer-ImgBox">
        <picture>
          <source media="(max-width:768px)" srcSet={AudienceImgM} />
          <source media="(min-width:769px)" srcSet={AudienceImgD} />
          <img src={AudienceImgM} alt="stand out" />
        </picture>
      </div>
      <div className="AudienceContainer-TxtBox">
        <h1 className="AudienceContainer-TxtBox-Title">
          Stand out to the right audience
        </h1>
        <p className="AudienceContainer-TxtBox-Para">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button className="AudienceContainer-TxtBox-Btn">Learn more </button>
      </div>
    </div>
  );
}
export default Audience;
