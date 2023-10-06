import "./Photos.css";
import {
  BottlesImgM,
  BottlesImgD,
  OrangeImgM,
  OrangeImgD,
  ConeImgM,
  ConeImgD,
  SugarImgM,
  SugarImgD,
} from "../assets";

function Photos() {
  return (
    <div className="PhotosContainer">
      <picture>
        <source media="(max-width:768px)" srcSet={BottlesImgM} />
        <source media="(min-width:769px)" srcSet={BottlesImgD} />
        <img src={BottlesImgM} alt="bottles milk" />
      </picture>
      <picture>
        <source media="(max-width:768px)" srcSet={OrangeImgM} />
        <source media="(min-width:769px)" srcSet={OrangeImgD} />
        <img src={OrangeImgM} alt="orange" />
      </picture>
      <picture>
        <source media="(max-width:768px)" srcSet={ConeImgM} />
        <source media="(min-width:769px)" srcSet={ConeImgD} />
        <img src={ConeImgM} alt="cone" />
      </picture>
      <picture>
        <source media="(max-width:768px)" srcSet={SugarImgM} />
        <source media="(min-width:769px)" srcSet={SugarImgD} />
        <img src={SugarImgM} alt="sugar cubes" />
      </picture>
    </div>
  );
}
export default Photos;
