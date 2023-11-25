
import ProgressiveImg from 'image_loading';

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
  