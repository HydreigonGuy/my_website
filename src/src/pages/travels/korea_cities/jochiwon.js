
import rainy_festival_photo from '../../../assets/images/IMG20230913191245.jpg';
import foggy_gobok_reservoire_photo from '../../../assets/images/IMG20230926185028.jpg';
import nigh_school_library_photo from '../../../assets/images/IMG20230930193817.jpg';
import nigh_gobok_reservoire_photo from '../../../assets/images/IMG20231022181150.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Jochiwon() {
    return (
        <div className='korean_page korean'>
            <img src={nigh_school_library_photo} className='big_image'/>
            <img src={rainy_festival_photo} className='big_image'/>
            <img src={foggy_gobok_reservoire_photo} className='big_image'/>
            <img src={nigh_gobok_reservoire_photo} className='big_image'/>
        </div>
    );
}

export default Jochiwon;
