
import header_photo from '../../../assets/images/korea/sejong/IMG20230915110832.jpg';
import plant_view_of_traditional_buildings from '../../../assets/images/korea/sejong/IMG20230915110735.jpg';
import waterfall from '../../../assets/images/korea/sejong/IMG20230915143919.jpg';
import arboretum_temple from '../../../assets/images/korea/sejong/IMG20231013141325.jpg';

import header_photo_small from '../../../assets/images/korea/sejong/small/IMG20230915110832.jpg';
import plant_view_of_traditional_buildings_small from '../../../assets/images/korea/sejong/small/IMG20230915110735.jpg';
import waterfall_small from '../../../assets/images/korea/sejong/small/IMG20230915143919.jpg';
import arboretum_temple_small from '../../../assets/images/korea/sejong/small/IMG20231013141325.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Sejong() {
    return (
        <div className='korean_city_page korean'>
            <p className='sejong_title'>Sejong - 세종</p>
            <ProgressiveImg src={header_photo} placeholderSrc={header_photo_small} className='sejong_header_img'/>
            <ProgressiveImg src={plant_view_of_traditional_buildings} placeholderSrc={plant_view_of_traditional_buildings_small} className='big_image'/>
            <ProgressiveImg src={waterfall} placeholderSrc={waterfall_small} className='big_image'/>
            <ProgressiveImg src={arboretum_temple} placeholderSrc={arboretum_temple_small} className='big_image'/>
        </div>
    );
}

export default Sejong;
