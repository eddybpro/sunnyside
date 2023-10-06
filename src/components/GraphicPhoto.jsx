import "./GraphicPhoto.css";

import { GraphicImgM, GraphicImgD, PhotoImgM, PhotoImgD } from "../assets";

function GraphicPhoto() {
  return (
    <div className="GraphicPhotoContainer">
      <div className="GraphicPhotoContainer-GraphicBox">
        <div className="GraphicPhotoContainer-GraphicBox-ImgBox">
          <picture>
            <source media="(max-width:768px)" srcSet={GraphicImgM} />
            <source media="(min-width:769px)" srcSet={GraphicImgD} />
            <img src={GraphicImgM} alt="graphic" />
          </picture>
        </div>
        <div className="GraphicPhotoContainer-GraphicBox-TxtBox">
          <h1 className="GraphicPhotoContainer-GraphicBox-TxtBox-Title">
            Graphic design
          </h1>
          <p className="GraphicPhotoContainer-GraphicBox-TxtBox-Para">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client&apos;s
            attention.
          </p>
        </div>
      </div>
      <div className="GraphicPhotoContainer-PhotoBox">
        <div className="GraphicPhotoContainer-PhotoBox-ImgBox">
          <picture>
            <source media="(max-width:768px)" srcSet={PhotoImgM} />
            <source media="(min-width:769px)" srcSet={PhotoImgD} />
            <img src={PhotoImgM} alt="photography" />
          </picture>
        </div>
        <div className="GraphicPhotoContainer-PhotoBox-TxtBox">
          <h1 className="GraphicPhotoContainer-PhotoBox-TxtBox-Title">
            Photography
          </h1>
          <p className="GraphicPhotoContainer-PhotoBox-TxtBox-Para">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}
export default GraphicPhoto;
