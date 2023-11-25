
import rainy_festival_photo from '../../../assets/images/korea/jochiwon/IMG20230913191245.jpg';
import foggy_gobok_reservoire_photo from '../../../assets/images/korea/jochiwon/IMG20230926185028.jpg';
import nigh_school_library_photo from '../../../assets/images/korea/jochiwon/IMG20230930193817.jpg';
import nigh_gobok_reservoire_photo from '../../../assets/images/korea/jochiwon/IMG20231022181150.jpg';
import school_mountain_lake1 from '../../../assets/images/korea/jochiwon/IMG20230902120218.jpg';
import festival_stands1 from '../../../assets/images/korea/jochiwon/IMG20231107134614.jpg';
import festival_stands2 from '../../../assets/images/korea/jochiwon/IMG20231108183101.jpg';
// import festival_stands3 from '../../../assets/images/korea/jochiwon/IMG20230913181928.jpg';

import rainy_festival_photo_small from '../../../assets/images/korea/jochiwon/small/IMG20230913191245.jpg';
import foggy_gobok_reservoire_photo_small from '../../../assets/images/korea/jochiwon/small/IMG20230926185028.jpg';
import nigh_school_library_photo_small from '../../../assets/images/korea/jochiwon/small/IMG20230930193817.jpg';
import nigh_gobok_reservoire_photo_small from '../../../assets/images/korea/jochiwon/small/IMG20231022181150.jpg';
import school_mountain_lake1_small from '../../../assets/images/korea/jochiwon/small/IMG20230902120218.jpg';
import festival_stands1_small from '../../../assets/images/korea/jochiwon/small/IMG20231107134614.jpg';
import festival_stands2_small from '../../../assets/images/korea/jochiwon/small/IMG20231108183101.jpg';
// import festival_stands3_small from '../../../assets/images/korea/jochiwon/small/IMG20230913181928.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Jochiwon() {
    return (
        <div className='korean_city_page korean'>
            <p className='jochiwon_title'>Jochiwon - 조치원</p>
            <ProgressiveImg src={school_mountain_lake1} placeholderSrc={school_mountain_lake1_small} className='jochiwon_header_img'/>
            <p>
                Jochiwon is where I go to school, at Korea University Sejong Campus!
            </p>
            <ProgressiveImg src={nigh_school_library_photo} placeholderSrc={nigh_school_library_photo_small} className='half_image'/>
            <span className='image_comment'>This is the school library.</span>
            <br/>
            <span className='image_comment_left_half'>
                The school hosted several Festivals, when they do this, food trucs come and there is a stage where the school clubs can perform, there is singing, playing music, and dancing.
            </span>
            <ProgressiveImg src={rainy_festival_photo} placeholderSrc={rainy_festival_photo_small} className='half_image'/>
            <ProgressiveImg src={festival_stands1} placeholderSrc={festival_stands1_small} className='half_image'/>
            <ProgressiveImg src={festival_stands2} placeholderSrc={festival_stands2_small} className='half_image'/>
            <p>
                Jochiwon has a reservoire surrounded by mountains.
                Hiking there is quite nice, and the reservoire is surrounded by cafés, so once you get there you have a place to take a break!
            </p>
            <ProgressiveImg src={foggy_gobok_reservoire_photo} placeholderSrc={foggy_gobok_reservoire_photo_small} className='big_image'/>
            <ProgressiveImg src={nigh_gobok_reservoire_photo} placeholderSrc={nigh_gobok_reservoire_photo_small} className='big_image'/>
        </div>
    );
}

export default Jochiwon;
