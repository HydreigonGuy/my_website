
import header_photo from '../../../assets/images/korea/sejong/IMG20230915110832.jpg';
import plant_view_of_traditional_buildings from '../../../assets/images/korea/sejong/IMG20230915110735.jpg';
import waterfall from '../../../assets/images/korea/sejong/IMG20230915143919.jpg';
import arboretum_temple from '../../../assets/images/korea/sejong/IMG20231013141325.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Sejong() {
    return (
        <div className='korean_city_page korean'>
            <p className='sejong_title'>Sejong - 세종</p>
            <img src={header_photo} className='sejong_header_img'/>
            <img src={plant_view_of_traditional_buildings} className='big_image'/>
            <img src={waterfall} className='big_image'/>
            <img src={arboretum_temple} className='big_image'/>
        </div>
    );
}

export default Sejong;
