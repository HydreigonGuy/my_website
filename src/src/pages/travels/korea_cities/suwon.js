
import header_photo from '../../../assets/images/korea/suwon/IMG20231104122951.jpg';
import fortress_view_of_park from '../../../assets/images/korea/suwon/IMG20231104104103.jpg';
import temple from '../../../assets/images/korea/suwon/IMG20231104115458.jpg';
import fortress_entrence from '../../../assets/images/korea/suwon/IMG20231104124118.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Suwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='suwon_title'>Suwon - 수원</p>
            <img src={header_photo} className='suwon_header_img'/>
            <img src={fortress_view_of_park} className='big_image'/>
            <img src={fortress_entrence} className='big_image'/>
            <img src={temple} className='big_image'/>
        </div>
    );
}

export default Suwon;
