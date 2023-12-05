
import header_photo from '../../../assets/images/korea/gwangju/IMG20231202174608.jpg';
import sajik_parctree_light from '../../../assets/images/korea/gwangju/IMG20231201215412.jpg';
import sajik_parc_entry from '../../../assets/images/korea/gwangju/IMG20231201215453.jpg';
import sajik_parc_otary from '../../../assets/images/korea/gwangju/IMG20231201215638.jpg';
import sajik_parc_color_path from '../../../assets/images/korea/gwangju/IMG20231201215904.jpg';
import me_sajik_parc from '../../../assets/images/korea/gwangju/IMG20231201215935.jpg';
import night_skyline from '../../../assets/images/korea/gwangju/IMG20231201224428.jpg';
import gwangju_parc_temple_1 from '../../../assets/images/korea/gwangju/IMG20231201231536.jpg';
import gwangju_parc_temple_2 from '../../../assets/images/korea/gwangju/IMG20231201231818.jpg';
import gwangju_parc_rock from '../../../assets/images/korea/gwangju/IMG20231201232018.jpg';
import gwangju_parc_memorial from '../../../assets/images/korea/gwangju/IMG20231201232244.jpg';
import mountain_view_1 from '../../../assets/images/korea/gwangju/IMG20231202113344.jpg';
import mountain_moss_and_ice from '../../../assets/images/korea/gwangju/IMG20231202113402.jpg';
import mountain_icy_rocks from '../../../assets/images/korea/gwangju/IMG20231202113504.jpg';
import mountain_view_of_mudeungsan from '../../../assets/images/korea/gwangju/IMG20231202113646.jpg';
import mountain_view_of_mudeungsan_2 from '../../../assets/images/korea/gwangju/IMG20231202120144.jpg';
import mountain_rock_formations from '../../../assets/images/korea/gwangju/IMG20231202121221.jpg';
import mountain_view_of_mudeungsan_3 from '../../../assets/images/korea/gwangju/IMG20231202122651.jpg';
import mountain_view_2 from '../../../assets/images/korea/gwangju/IMG20231202122805.jpg';
import mountain_view_of_mudeungsan_4 from '../../../assets/images/korea/gwangju/IMG20231202122817.jpg';
import mountain_rock from '../../../assets/images/korea/gwangju/IMG20231202122839.jpg';
import mountain_view_3 from '../../../assets/images/korea/gwangju/IMG20231202122922.jpg';
import mountain_view_4 from '../../../assets/images/korea/gwangju/IMG20231202123028.jpg';
import mountain_snowy_view_of_mudeungsan from '../../../assets/images/korea/gwangju/IMG20231202123215.jpg';
import mountain_snow_trees from '../../../assets/images/korea/gwangju/IMG20231202123420.jpg';
import mountain_river from '../../../assets/images/korea/gwangju/IMG20231202134620.jpg';
import day_skyline from '../../../assets/images/korea/gwangju/IMG20231203120737.jpg';

import header_photo_small from '../../../assets/images/korea/gwangju/small/IMG20231202174608.jpg';
import sajik_parctree_light_small from '../../../assets/images/korea/gwangju/small/IMG20231201215412.jpg';
import sajik_parc_entry_small from '../../../assets/images/korea/gwangju/small/IMG20231201215453.jpg';
import sajik_parc_otary_small from '../../../assets/images/korea/gwangju/small/IMG20231201215638.jpg';
import sajik_parc_color_path_small from '../../../assets/images/korea/gwangju/small/IMG20231201215904.jpg';
import me_sajik_parc_small from '../../../assets/images/korea/gwangju/small/IMG20231201215935.jpg';
import night_skyline_small from '../../../assets/images/korea/gwangju/small/IMG20231201224428.jpg';
import gwangju_parc_temple_1_small from '../../../assets/images/korea/gwangju/small/IMG20231201231536.jpg';
import gwangju_parc_temple_2_small from '../../../assets/images/korea/gwangju/small/IMG20231201231818.jpg';
import gwangju_parc_rock_small from '../../../assets/images/korea/gwangju/small/IMG20231201232018.jpg';
import gwangju_parc_memorial_small from '../../../assets/images/korea/gwangju/small/IMG20231201232244.jpg';
import mountain_view_1_small from '../../../assets/images/korea/gwangju/small/IMG20231202113344.jpg';
import mountain_moss_and_ice_small from '../../../assets/images/korea/gwangju/small/IMG20231202113402.jpg';
import mountain_icy_rocks_small from '../../../assets/images/korea/gwangju/small/IMG20231202113504.jpg';
import mountain_view_of_mudeungsan_small from '../../../assets/images/korea/gwangju/small/IMG20231202113646.jpg';
import mountain_view_of_mudeungsan_2_small from '../../../assets/images/korea/gwangju/small/IMG20231202120144.jpg';
import mountain_rock_formations_small from '../../../assets/images/korea/gwangju/small/IMG20231202121221.jpg';
import mountain_view_of_mudeungsan_3_small from '../../../assets/images/korea/gwangju/small/IMG20231202122651.jpg';
import mountain_view_2_small from '../../../assets/images/korea/gwangju/small/IMG20231202122805.jpg';
import mountain_view_of_mudeungsan_4_small from '../../../assets/images/korea/gwangju/small/IMG20231202122817.jpg';
import mountain_rock_small from '../../../assets/images/korea/gwangju/small/IMG20231202122839.jpg';
import mountain_view_3_small from '../../../assets/images/korea/gwangju/small/IMG20231202122922.jpg';
import mountain_view_4_small from '../../../assets/images/korea/gwangju/small/IMG20231202123028.jpg';
import mountain_snowy_view_of_mudeungsan_small from '../../../assets/images/korea/gwangju/small/IMG20231202123215.jpg';
import mountain_snow_trees_small from '../../../assets/images/korea/gwangju/small/IMG20231202123420.jpg';
import mountain_river_small from '../../../assets/images/korea/gwangju/small/IMG20231202134620.jpg';
import day_skyline_small from '../../../assets/images/korea/gwangju/small/IMG20231203120737.jpg';

import '../../../assets/css/korean.css';
import '../../../assets/css/travels.css';

import ProgressiveImg from '../../../components/image_loading';

function Gwangju() {
    return (
        <div className='korean_city_page korean'>
            <p className='gwangju_title'>Gwangju - 광주</p>
            <ProgressiveImg src={header_photo} placeholderSrc={header_photo_small} className='gwangju_header_img'/>
            {/*<ProgressiveImg src={} placeholderSrc={_small} className='big_image'/>*/}
            <p>My trip to Gwangju started by visiting Sajik Park.</p>
            <ProgressiveImg src={me_sajik_parc} placeholderSrc={me_sajik_parc_small} className='fourth_image'/>
            <ProgressiveImg src={sajik_parc_otary} placeholderSrc={sajik_parc_otary_small} className='fourth_image'/>
            <ProgressiveImg src={sajik_parctree_light} placeholderSrc={sajik_parctree_light_small} className='fourth_image'/>
            <ProgressiveImg src={sajik_parc_color_path} placeholderSrc={sajik_parc_color_path_small} className='fourth_image'/>
            <ProgressiveImg src={sajik_parc_entry} placeholderSrc={sajik_parc_entry_small} className='big_image'/>
            <p>Then, it was time for Gwangju Parc.</p>
            <ProgressiveImg src={gwangju_parc_temple_2} placeholderSrc={gwangju_parc_temple_2_small} className='true_third_image'/>
            <ProgressiveImg src={gwangju_parc_rock} placeholderSrc={gwangju_parc_rock_small} className='true_third_image'/>
            <ProgressiveImg src={gwangju_parc_memorial} placeholderSrc={gwangju_parc_memorial_small} className='true_third_image'/>
            <ProgressiveImg src={gwangju_parc_temple_1} placeholderSrc={gwangju_parc_temple_1_small} className='true_third_image'/>
            <ProgressiveImg src={night_skyline} placeholderSrc={night_skyline_small} className='true_third_image'/>
            <ProgressiveImg src={day_skyline} placeholderSrc={day_skyline_small} className='true_third_image'/>
            <p>And then I climbed Mudeungsan!</p>
            <ProgressiveImg src={mountain_moss_and_ice} placeholderSrc={mountain_moss_and_ice_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_icy_rocks} placeholderSrc={mountain_icy_rocks_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_river} placeholderSrc={mountain_river_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_of_mudeungsan} placeholderSrc={mountain_view_of_mudeungsan_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_rock_formations} placeholderSrc={mountain_rock_formations_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_2} placeholderSrc={mountain_view_2_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_1} placeholderSrc={mountain_view_1_small} className='fourth_image'/>
            <ProgressiveImg src={mountain_view_of_mudeungsan_4} placeholderSrc={mountain_view_of_mudeungsan_4_small} className='fourth_image'/>
            <ProgressiveImg src={mountain_rock} placeholderSrc={mountain_rock_small} className='fourth_image'/>
            <ProgressiveImg src={mountain_snow_trees} placeholderSrc={mountain_snow_trees_small} className='fourth_image'/>
            <ProgressiveImg src={mountain_view_of_mudeungsan_3} placeholderSrc={mountain_view_of_mudeungsan_3_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_of_mudeungsan_2} placeholderSrc={mountain_view_of_mudeungsan_2_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_3} placeholderSrc={mountain_view_3_small} className='true_third_image'/>
            <ProgressiveImg src={mountain_view_4} placeholderSrc={mountain_view_4_small} className='half_image'/>
            <ProgressiveImg src={mountain_snowy_view_of_mudeungsan} placeholderSrc={mountain_snowy_view_of_mudeungsan_small} className='half_image'/>
        </div>
    );
}

export default Gwangju;
