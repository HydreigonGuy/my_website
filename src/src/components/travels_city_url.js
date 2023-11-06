function TravelCityUrl(props) {
    return (
      <div className="city_url">
        <div>
          <img src={props.img}/>
          <br/>
          {props.name}
        </div>
      </div>
    );
  }
  
  export default TravelCityUrl;
  