

import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className="image"
    />
  );
};

function TravelCityUrl(props) {
    return (
      <div className="city_url">
        <a href={props.url}>
          <div>
            <ProgressiveImg
      src={props.img}
      placeholderSrc={props.small_img}
            />
            <br/>
            {props.name}
              {props.comment &&
                <p className="city_comment">{props.comment}</p>
              }
          </div>
        </a>
      </div>
    );
  }
  
  export default TravelCityUrl;
  