
import rainy_festival_photo from '../../../assets/images/korea/jochiwon/IMG20230913191245.jpg';
import foggy_gobok_reservoire_photo from '../../../assets/images/korea/jochiwon/IMG20230926185028.jpg';
import nigh_school_library_photo from '../../../assets/images/korea/jochiwon/IMG20230930193817.jpg';
import nigh_gobok_reservoire_photo from '../../../assets/images/korea/jochiwon/IMG20231022181150.jpg';
import school_mountain_lake1 from '../../../assets/images/korea/jochiwon/IMG20230902120218.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Jochiwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='jochiwon_title'>Jochiwon - 조치원</p>
            <img src={school_mountain_lake1} className='jochiwon_header_img'/>
            <p>
                Jochiwon is where I go to school, at Korea University Sejong Campus!
            </p>
            <img src={nigh_school_library_photo} className='half_image'/>
            <span className='image_comment'>This is the school library.</span>
            <br/>
            <span className='image_comment_left_half'>
                The school hosted several Festivals, when they do this, food trucs come and there is a stage where the school clubs can perform, there is singing, playing music, and dancing.
            </span>
            <img src={rainy_festival_photo} className='half_image'/>
            <p>
                Jochiwon has a reservoire surrounded by mountains.
                Hiking there is quite nice, and the reservoire is surrounded by cafés, so once you get there you have a place to take a break!
            </p>
            <img src={foggy_gobok_reservoire_photo} className='big_image'/>
            <img src={nigh_gobok_reservoire_photo} className='big_image'/>
        </div>
    );
}

export default Jochiwon;
