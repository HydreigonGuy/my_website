
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

import header_photo_small from '../../../assets/images/korea/daegu/small/IMG20230822174058.jpg';
import random_temple_small from '../../../assets/images/korea/daegu/small/IMG20230822162230.jpg';
import city_river_view_small from '../../../assets/images/korea/daegu/small/IMG20230822164847.jpg';
import lilypond_temple_small from '../../../assets/images/korea/daegu/small/IMG20230822174437.jpg';
import mountaintop_city_view_small from '../../../assets/images/korea/daegu/small/IMG20230822181049.jpg';
import parc1_small from '../../../assets/images/korea/daegu/small/IMG20230823125212.jpg';
import mountain_bridge_small from '../../../assets/images/korea/daegu/small/IMG20230823142311.jpg';
import mountain_buddhist_temple_small from '../../../assets/images/korea/daegu/small/IMG20230823145401.jpg';
import mountain_buddhist_temple_statue_small from '../../../assets/images/korea/daegu/small/IMG20230823145823.jpg';
import arboretum_bridge_small from '../../../assets/images/korea/daegu/small/IMG20230824130900.jpg';
import arboretum_river_small from '../../../assets/images/korea/daegu/small/IMG20230824133207.jpg';
import arboretum_pond_small from '../../../assets/images/korea/daegu/small/IMG20230824135825.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Daegu() {
    return (
        <div className='korean_city_page korean'>
            <p className='daegu_title'>Daegu - 대구</p>
            <ProgressiveImg src={header_photo} placeholderSrc={header_photo_small} className='daegu_header_img'/>
            <ProgressiveImg src={random_temple} placeholderSrc={random_temple_small} className='big_image'/>
            <ProgressiveImg src={city_river_view} placeholderSrc={city_river_view_small} className='third_image'/>
            <ProgressiveImg src={lilypond_temple} placeholderSrc={lilypond_temple_small} className='third_image'/>
            <ProgressiveImg src={mountain_bridge} placeholderSrc={mountain_bridge_small} className='third_image'/>
            <ProgressiveImg src={mountaintop_city_view} placeholderSrc={mountaintop_city_view_small} className='big_image'/>
            <ProgressiveImg src={parc1} placeholderSrc={parc1_small} className='third_image'/>
            <ProgressiveImg src={mountain_buddhist_temple} placeholderSrc={mountain_buddhist_temple_small} className='third_image'/>
            <ProgressiveImg src={arboretum_pond} placeholderSrc={arboretum_pond_small} className='third_image'/>
            <ProgressiveImg src={mountain_buddhist_temple_statue} placeholderSrc={mountain_buddhist_temple_statue_small} className='third_image'/>
            <ProgressiveImg src={arboretum_bridge} placeholderSrc={arboretum_bridge_small} className='third_image'/>
            <ProgressiveImg src={arboretum_river} placeholderSrc={arboretum_river_small} className='third_image'/>
        </div>
    );
}

export default Daegu;
