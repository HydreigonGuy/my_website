
import header_photo from '../../../assets/images/korea/busan/IMG20230820161553.jpg';
import texas_street_gate from '../../../assets/images/korea/busan/IMG20230819200945.jpg';
import texas_street from '../../../assets/images/korea/busan/IMG20230819211955.jpg';
import root_city_view from '../../../assets/images/korea/busan/IMG20230820141244.jpg';
import lotte_mart_rooftop from '../../../assets/images/korea/busan/IMG20230820161709.jpg';
import cyan_twin_towers from '../../../assets/images/korea/busan/IMG20230820190523.jpg';
import beach1 from '../../../assets/images/korea/busan/IMG20230821101728.jpg';
import beach2 from '../../../assets/images/korea/busan/IMG20230821112915.jpg';
import beach_skyline from '../../../assets/images/korea/busan/IMG20230821114142.jpg';
import beach3 from '../../../assets/images/korea/busan/IMG20230821190001.jpg';
import city_line1 from '../../../assets/images/korea/busan/IMG20230821192054.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Suwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='busan_title'>Busan - 부산</p>
            <img src={header_photo} className='busan_header_img'/>
            <img src={beach_skyline} className='big_image'/>
            <img src={texas_street_gate} className='third_image'/>
            <img src={texas_street} className='third_image'/>
            <img src={lotte_mart_rooftop} className='third_image'/>
            <img src={beach1} className='third_image'/>
            <img src={beach2} className='third_image'/>
            <img src={beach3} className='third_image'/>
            <img src={city_line1} className='big_image'/>
            <img src={root_city_view} className='half_image'/>
            <img src={cyan_twin_towers} className='half_image'/>
            
        </div>
    );
}

export default Suwon;
