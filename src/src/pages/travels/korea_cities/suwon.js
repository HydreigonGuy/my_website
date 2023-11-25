
import header_photo from '../../../assets/images/korea/suwon/IMG20231104122951.jpg';
import fortress_view_of_park from '../../../assets/images/korea/suwon/IMG20231104104103.jpg';
import temple from '../../../assets/images/korea/suwon/IMG20231104115458.jpg';
import fortress_entrence from '../../../assets/images/korea/suwon/IMG20231104124118.jpg';

import header_photo_small from '../../../assets/images/korea/suwon/IMG20231104122951.jpg';
import fortress_view_of_park_small from '../../../assets/images/korea/suwon/IMG20231104104103.jpg';
import temple_small from '../../../assets/images/korea/suwon/IMG20231104115458.jpg';
import fortress_entrence_small from '../../../assets/images/korea/suwon/IMG20231104124118.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Suwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='suwon_title'>Suwon - 수원</p>
            <ProgressiveImg src={header_photo} placeholderSrc={header_photo_small} className='suwon_header_img'/>
            <ProgressiveImg src={fortress_view_of_park} placeholderSrc={fortress_view_of_park_small} className='big_image'/>
            <ProgressiveImg src={fortress_entrence} placeholderSrc={fortress_entrence_small} className='big_image'/>
            <ProgressiveImg src={temple} placeholderSrc={temple_small} className='big_image'/>
        </div>
    );
}

export default Suwon;
