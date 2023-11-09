
import header_photo from '../../../assets/images/korea/daegu/IMG20230822174058.jpg';
import random_temple from '../../../assets/images/korea/daegu/IMG20230822162230.jpg';
import city_river_view from '../../../assets/images/korea/daegu/IMG20230822164847.jpg';
import lilypond_temple from '../../../assets/images/korea/daegu/IMG20230822174437.jpg';
import mountaintop_city_view from '../../../assets/images/korea/daegu/IMG20230822181049.jpg';
import parc1 from '../../../assets/images/korea/daegu/IMG20230823125212.jpg';
import mountain_bridge from '../../../assets/images/korea/daegu/IMG20230823142311.jpg';
import mountain_buddhist_temple from '../../../assets/images/korea/daegu/IMG20230823145401.jpg';
import mountain_buddhist_temple_statue from '../../../assets/images/korea/daegu/IMG20230823145823.jpg';
import arboretum_bridge from '../../../assets/images/korea/daegu/IMG20230824130900.jpg';
import arboretum_river from '../../../assets/images/korea/daegu/IMG20230824133207.jpg';
import arboretum_pond from '../../../assets/images/korea/daegu/IMG20230824135825.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

function Daegu() {
    return (
        <div className='korean_city_page korean'>
            <p className='daegu_title'>Daegu - 대구</p>
            <img src={header_photo} className='daegu_header_img'/>
            <img src={random_temple} className='big_image'/>
            <img src={city_river_view} className='third_image'/>
            <img src={lilypond_temple} className='third_image'/>
            <img src={mountain_bridge} className='third_image'/>
            <img src={mountaintop_city_view} className='big_image'/>
            <img src={parc1} className='third_image'/>
            <img src={mountain_buddhist_temple} className='third_image'/>
            <img src={arboretum_pond} className='third_image'/>
            <img src={mountain_buddhist_temple_statue} className='third_image'/>
            <img src={arboretum_bridge} className='third_image'/>
            <img src={arboretum_river} className='third_image'/>
        </div>
    );
}

export default Daegu;
