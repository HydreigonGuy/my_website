
import tianamen_square_img from '../../assets/images/china/IMG20240107134632.jpg';
import great_wall_of_badaling_img from '../../assets/images/china/IMG20240106153445.jpg';
import summer_palace_img from '../../assets/images/china/IMG20240109161614.jpg';
import forbidden_city_img from '../../assets/images/china/IMG20240107131638.jpg';
import beihai_park_img from '../../assets/images/china/IMG20240105153427.jpg';
import beijing_night_one_img from '../../assets/images/china/IMG20240105173504.jpg';
import beijing_night_two_img from '../../assets/images/china/IMG20240105173404.jpg';
import beijing_night_three_img from '../../assets/images/china/IMG20240105174319.jpg';
import art_museum_img from '../../assets/images/china/IMG20240107114549.jpg';
import temple_1_img from '../../assets/images/china/IMG20240107140207.jpg';
import stucture_1_img from '../../assets/images/china/IMG20240107161915.jpg';
import cool_building_1_img from '../../assets/images/china/IMG20240108111139.jpg';
import pearl_market_img from '../../assets/images/china/IMG20240108140221.jpg';


import '../../assets/css/china.css';
import '../../assets/css/travels.css';


function China() {
    return (
        <>
        <div className='china_header_image_container'>
        <img src={tianamen_square_img} className="china_header_image" />
        </div>
        <div className='china_body'>
            <h1>China</h1>
            <div className='place_url_link'>
                <a>
                    <img src={great_wall_of_badaling_img}/>
                    <h2>Great Wall of Balading</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a>
                    <img src={summer_palace_img}/>
                    <h2>Summer Palace</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a>
                    <img src={forbidden_city_img}/>
                    <h2>Forbidden City</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a>
                    <img src={beihai_park_img}/>
                    <h2>Beihai Park</h2>
                </a>
            </div>
            <br/>
            <h3>Beijing durring the day</h3>
            <img src={art_museum_img} className="true_third_image" />
            <img src={temple_1_img} className="true_third_image" />
            <img src={pearl_market_img} className="true_third_image" />
            <img src={stucture_1_img} className="half_image" />
            <img src={cool_building_1_img} className="half_image" />
            <h3>Beijing at night</h3>
            <img src={beijing_night_one_img} className="big_image" />
            <img src={beijing_night_two_img} className="half_image" />
            <img src={beijing_night_three_img} className="half_image" />
        </div>
        </>
    );
}

export default China;
