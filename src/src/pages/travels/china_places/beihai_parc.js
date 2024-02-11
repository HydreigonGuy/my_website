
import bridge_img from '../../../assets/images/china/IMG20240105143551.jpg';
import roofs_img from '../../../assets/images/china/IMG20240105143753.jpg';
import thing_img from '../../../assets/images/china/IMG20240105143951.jpg';
import bridge_to_thing_img from '../../../assets/images/china/IMG20240105145544.jpg';
import stuff_img from '../../../assets/images/china/IMG20240105152200.jpg';
import water_view_img from '../../../assets/images/china/IMG20240105152243.jpg';
import temple_thing_img from '../../../assets/images/china/IMG20240105152701.jpg';
import view_of_parc_img from '../../../assets/images/china/IMG20240105153427.jpg';

import '../../../assets/css/china.css';
import '../../../assets/css/travels.css';

function BeihaiPark() {
    return (
        <>
            <div className='balading_body'>
                <img src={water_view_img} className="big_image" />
                <img src={bridge_img} className="half_image" />
                <img src={temple_thing_img} className="half_image" />
                <img src={roofs_img} className="big_image" />
                <img src={thing_img} className="half_image" />
                <img src={bridge_to_thing_img} className="half_image" />
                <img src={stuff_img} className="big_image" />
                <img src={view_of_parc_img} className="big_image" />
            </div>
        </>
    );
}

export default BeihaiPark;
