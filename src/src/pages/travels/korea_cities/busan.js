
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

import header_photo_small from '../../../assets/images/korea/busan/small/IMG20230820161553.jpg';
import texas_street_gate_small from '../../../assets/images/korea/busan/small/IMG20230819200945.jpg';
import texas_street_small from '../../../assets/images/korea/busan/small/IMG20230819211955.jpg';
import root_city_view_small from '../../../assets/images/korea/busan/small/IMG20230820141244.jpg';
import lotte_mart_rooftop_small from '../../../assets/images/korea/busan/small/IMG20230820161709.jpg';
import cyan_twin_towers_small from '../../../assets/images/korea/busan/small/IMG20230820190523.jpg';
import beach1_small from '../../../assets/images/korea/busan/small/IMG20230821101728.jpg';
import beach2_small from '../../../assets/images/korea/busan/small/IMG20230821112915.jpg';
import beach_skyline_small from '../../../assets/images/korea/busan/small/IMG20230821114142.jpg';
import beach3_small from '../../../assets/images/korea/busan/small/IMG20230821190001.jpg';
import city_line1_small from '../../../assets/images/korea/busan/small/IMG20230821192054.jpg';


import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Suwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='busan_title'>Busan - 부산</p>
            <ProgressiveImg src={header_photo} placeholderSrc={header_photo_small} className='busan_header_img'/>
            <ProgressiveImg src={beach_skyline} placeholderSrc={beach_skyline_small} className='big_image'/>
            <ProgressiveImg src={texas_street_gate} placeholderSrc={texas_street_gate_small} className='third_image'/>
            <ProgressiveImg src={texas_street} placeholderSrc={texas_street_small} className='third_image'/>
            <ProgressiveImg src={lotte_mart_rooftop} placeholderSrc={lotte_mart_rooftop_small} className='third_image'/>
            <ProgressiveImg src={beach1} placeholderSrc={beach1_small} className='third_image'/>
            <ProgressiveImg src={beach2} placeholderSrc={beach2_small} className='third_image'/>
            <ProgressiveImg src={beach3} placeholderSrc={beach3_small} className='third_image'/>
            <ProgressiveImg src={city_line1} placeholderSrc={city_line1_small} className='big_image'/>
            <ProgressiveImg src={root_city_view} placeholderSrc={root_city_view_small} className='half_image'/>
            <ProgressiveImg src={cyan_twin_towers} placeholderSrc={cyan_twin_towers_small} className='half_image'/>
            
        </div>
    );
}

export default Suwon;
