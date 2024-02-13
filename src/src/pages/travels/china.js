
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
import huairou_reservoir_1_img from '../../assets/images/china/IMG20240128153509.jpg';
import huairou_reservoir_2_img from '../../assets/images/china/IMG20240128153513.jpg';
import yanqi_lake_1_img from '../../assets/images/china/IMG20240129134049.jpg';
import yanqi_lake_2_img from '../../assets/images/china/IMG20240129141855.jpg';
import yanqi_lake_3_img from '../../assets/images/china/IMG20240129141907.jpg';
import hongluo_temple_1_img from '../../assets/images/china/IMG20240130125229.jpg';
import hongluo_temple_2_img from '../../assets/images/china/IMG20240130125415.jpg';
import hongluo_temple_3_img from '../../assets/images/china/IMG20240130125608.jpg';
import hongluo_temple_4_img from '../../assets/images/china/IMG20240130125638.jpg';
import hongluo_temple_5_img from '../../assets/images/china/IMG20240130130003.jpg';
import hongluo_temple_6_img from '../../assets/images/china/IMG20240130130123.jpg';
import old_summer_palace_1_img from '../../assets/images/china/IMG20240201142421.jpg';
import old_summer_palace_2_img from '../../assets/images/china/IMG20240201142447.jpg';
import old_summer_palace_3_img from '../../assets/images/china/IMG20240201160507.jpg';
import tianamen_pillar_img from '../../assets/images/china/IMG20240107135606.jpg';
import tianamen_1_img from '../../assets/images/china/IMG20240107141620.jpg';
import tianamen_2_img from '../../assets/images/china/IMG20240107142252.jpg';
import zhongshan_parc_1_img from '../../assets/images/china/IMG20240107144010.jpg';
import zhongshan_parc_2_img from '../../assets/images/china/IMG20240107144032.jpg';
import zhongshan_parc_3_img from '../../assets/images/china/IMG20240107144512.jpg';
import zhongshan_parc_4_img from '../../assets/images/china/IMG20240107144723.jpg';
import temple_of_heaven_1_img from '../../assets/images/china/IMG20240108120051.jpg';
import temple_of_heaven_2_img from '../../assets/images/china/IMG20240108121214.jpg';
import temple_of_heaven_3_img from '../../assets/images/china/IMG20240108122036.jpg';
import temple_of_heaven_4_img from '../../assets/images/china/IMG20240108122912.jpg';


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
                <a href='/china/baladingwall'>
                    <img src={great_wall_of_badaling_img}/>
                    <h2>Great Wall of Balading</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a href='/china/summerpalace'>
                    <img src={summer_palace_img}/>
                    <h2>Summer Palace</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a href='/china/forbiddencity'>
                    <img src={forbidden_city_img}/>
                    <h2>Forbidden City</h2>
                </a>
            </div>
            <div className='place_url_link'>
                <a href='/china/beihaiparc'>
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
            <h3>Huairou Reservoir</h3>
            <img src={huairou_reservoir_1_img} className="half_image" />
            <img src={huairou_reservoir_2_img} className="half_image" />
            <h3>Yanqi Lake</h3>
            <img src={yanqi_lake_1_img} className="true_third_image" />
            <img src={yanqi_lake_2_img} className="true_third_image" />
            <img src={yanqi_lake_3_img} className="true_third_image" />
            <h3>Hongluo Temple</h3>
            <img src={hongluo_temple_1_img} className="big_image" />
            <img src={hongluo_temple_2_img} className="fourth_image" />
            <img src={hongluo_temple_3_img} className="fourth_image" />
            <img src={hongluo_temple_5_img} className="fourth_image" />
            <img src={hongluo_temple_6_img} className="fourth_image" />
            <img src={hongluo_temple_4_img} className="big_image" />
            <h3>Old Summer Palace</h3>
            <img src={old_summer_palace_1_img} className="half_image" />
            <img src={old_summer_palace_3_img} className="half_image" />
            <img src={old_summer_palace_2_img} className="big_image" />
        </div>
        </>
    );
}

export default China;
