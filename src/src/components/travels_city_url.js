
function TravelCityUrl(props) {
    return (
      <div className="city_url">
        <a href={props.url}>
          <div>
            <img src={props.img}/>
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
  