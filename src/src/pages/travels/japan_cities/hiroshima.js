
import city_sign_img_h from '../../../assets/images/japan/hiroshima/IMG20240225134208.jpg';
import hiroshima_castle_img_v from '../../../assets/images/japan/hiroshima/IMG20240225141058.jpg';
import a_bomb_dome_1_img_h from '../../../assets/images/japan/hiroshima/IMG20240225143641.jpg';
import a_bomb_dome_2_img_h from '../../../assets/images/japan/hiroshima/IMG20240225143833.jpg';
import a_bomb_dome_3_img_v from '../../../assets/images/japan/hiroshima/IMG20240225143953.jpg';
import a_bomb_dome_4_img_h from '../../../assets/images/japan/hiroshima/IMG20240225144657.jpg';

import '../../../assets/css/japan.css';
import '../../../assets/css/travels.css';

function Hiroshima() {
    return (
        <>
            <img src={city_sign_img_h} className="hiroshima_title" />
            <p className='hiroshima_title_text'>Hiroshima</p>
            <img src={hiroshima_castle_img_v} className="half_image" />
            <img src={a_bomb_dome_3_img_v} className="half_image" />
            <img src={a_bomb_dome_1_img_h} className="half_image" />
            <img src={a_bomb_dome_2_img_h} className="half_image" />
            <img src={a_bomb_dome_4_img_h} className="big_image" />
        </>
    );
}

export default Hiroshima;
