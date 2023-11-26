
import me_big_ben_img from '../../assets/images/uk/Snapchat-716959219.jpg';
import me_buckingham_img from '../../assets/images/uk/Snapchat-1705563956.jpg';
import me_idk_img from '../../assets/images/uk/Snapchat-566078020.jpg';

import tall_building_1_img from '../../assets/images/uk/IMG20230328143751.jpg';
import eye_of_london_img from '../../assets/images/uk/IMG20230328124745.jpg';
import I_dont_know_cool_castle_img from '../../assets/images/uk/IMG20230328123046.jpg';
import other_cool_castle_img from '../../assets/images/uk/IMG20230328121620.jpg';
import buckingham_garden_img from '../../assets/images/uk/IMG20230328115643.jpg';
import skyline_1_img from '../../assets/images/uk/IMG20230327193942.jpg';
import brighton_cool_colorful_houses_img from '../../assets/images/uk/IMG20230327141614.jpg';
import brighton_beach_img from '../../assets/images/uk/IMG20230327131835.jpg';
import important_looking_big_building_img from '../../assets/images/uk/IMG20230327091958.jpg';
import other_important_looking_big_building_img from '../../assets/images/uk/IMG20230327091756.jpg';
import view_of_big_buildings_img from '../../assets/images/uk/IMG20230327085134.jpg';
import cool_view_of_the_popular_area_img from '../../assets/images/uk/IMG20230326180335.jpg';
import museum_building_img from '../../assets/images/uk/IMG20230326142451.jpg';
import swan_in_front_of_building_img from '../../assets/images/uk/IMG20230326135558.jpg';
import buckingham_palace_img from '../../assets/images/uk/IMG20230325162511.jpg';
import big_ben_img from '../../assets/images/uk/IMG20230325140520.jpg';
import castle_bridge_img from '../../assets/images/uk/IMG20230325125356.jpg';
import skyline_2_img from '../../assets/images/uk/IMG20230325125338.jpg';
import castle_bridge_2_img from '../../assets/images/uk/IMG20230325114409.jpg';
import tower_of_london_img from '../../assets/images/uk/IMG20230325114058.jpg';
import london_street_view_img from '../../assets/images/uk/IMG20230325111253.jpg';

import tall_building_1_img_small from '../../assets/images/uk/small/IMG20230328143751.jpg';
import eye_of_london_img_small from '../../assets/images/uk/small/IMG20230328124745.jpg';
import I_dont_know_cool_castle_img_small from '../../assets/images/uk/small/IMG20230328123046.jpg';
import other_cool_castle_img_small from '../../assets/images/uk/small/IMG20230328121620.jpg';
import buckingham_garden_img_small from '../../assets/images/uk/small/IMG20230328115643.jpg';
import skyline_1_img_small from '../../assets/images/uk/small/IMG20230327193942.jpg';
import brighton_cool_colorful_houses_img_small from '../../assets/images/uk/small/IMG20230327141614.jpg';
import brighton_beach_img_small from '../../assets/images/uk/small/IMG20230327131835.jpg';
import important_looking_big_building_img_small from '../../assets/images/uk/small/IMG20230327091958.jpg';
import other_important_looking_big_building_img_small from '../../assets/images/uk/small/IMG20230327091756.jpg';
import view_of_big_buildings_img_small from '../../assets/images/uk/small/IMG20230327085134.jpg';
import cool_view_of_the_popular_area_img_small from '../../assets/images/uk/small/IMG20230326180335.jpg';
import museum_building_img_small from '../../assets/images/uk/small/IMG20230326142451.jpg';
import swan_in_front_of_building_img_small from '../../assets/images/uk/small/IMG20230326135558.jpg';
import buckingham_palace_img_small from '../../assets/images/uk/small/IMG20230325162511.jpg';
import big_ben_img_small from '../../assets/images/uk/small/IMG20230325140520.jpg';
import castle_bridge_img_small from '../../assets/images/uk/small/IMG20230325125356.jpg';
import skyline_2_img_small from '../../assets/images/uk/small/IMG20230325125338.jpg';
import castle_bridge_2_img_small from '../../assets/images/uk/small/IMG20230325114409.jpg';
import tower_of_london_img_small from '../../assets/images/uk/small/IMG20230325114058.jpg';
import london_street_view_img_small from '../../assets/images/uk/small/IMG20230325111253.jpg';

import '../../assets/css/uk.css';
import '../../assets/css/travels.css';

import ProgressiveImg from '../../components/image_loading';

function Korea() {
  return (
    <>
      <div className='korean_page korean'>
        <img src={me_big_ben_img} className="exact_third" />
        <img src={me_buckingham_img} className="exact_third" />
        <img src={me_idk_img} className="exact_third" />
        <br/>
        <p className="uk_title_span" >Here you can find pictures of my trip to the UK in March 2023!</p>
        <br/>
        <div className='content'>
          <ProgressiveImg src={big_ben_img} placeholderSrc={big_ben_img_small} className="picture" />
          <ProgressiveImg src={castle_bridge_img} placeholderSrc={castle_bridge_img_small} className="picture" />
          <ProgressiveImg src={other_important_looking_big_building_img} placeholderSrc={other_important_looking_big_building_img_small} className="picture" />
          <p>It all started in London!</p>
          <ProgressiveImg src={london_street_view_img} placeholderSrc={london_street_view_img_small} className="picture" />
          <ProgressiveImg src={castle_bridge_2_img} placeholderSrc={castle_bridge_2_img_small} className="picture" />
          <ProgressiveImg src={tower_of_london_img} placeholderSrc={tower_of_london_img_small} className="picture" />
          <ProgressiveImg src={buckingham_palace_img} placeholderSrc={buckingham_palace_img_small} className="picture" />
          <ProgressiveImg src={important_looking_big_building_img} placeholderSrc={important_looking_big_building_img_small} className="picture" />
          <ProgressiveImg src={eye_of_london_img} placeholderSrc={eye_of_london_img_small} className="picture" />
          <ProgressiveImg src={I_dont_know_cool_castle_img} placeholderSrc={I_dont_know_cool_castle_img_small} className="picture" />
          <ProgressiveImg src={other_cool_castle_img} placeholderSrc={other_cool_castle_img_small} className="picture" />
          <ProgressiveImg src={buckingham_garden_img} placeholderSrc={buckingham_garden_img_small} className="picture" />
          <ProgressiveImg src={skyline_1_img} placeholderSrc={skyline_1_img_small} className="picture_fourth" />
          <ProgressiveImg src={view_of_big_buildings_img} placeholderSrc={view_of_big_buildings_img_small} className="picture_fourth" />
          <ProgressiveImg src={skyline_2_img} placeholderSrc={skyline_2_img_small} className="picture_fourth" />
          <ProgressiveImg src={tall_building_1_img} placeholderSrc={tall_building_1_img_small} className="picture_fourth" />
          <ProgressiveImg src={cool_view_of_the_popular_area_img} placeholderSrc={cool_view_of_the_popular_area_img_small} className="picture_half" />
          <ProgressiveImg src={museum_building_img} placeholderSrc={museum_building_img_small} className="picture_half" />
          <ProgressiveImg src={swan_in_front_of_building_img} placeholderSrc={swan_in_front_of_building_img_small} className="picture_full" />
          <br/>
          <p>And then I visited Brighton!</p>
          <ProgressiveImg src={brighton_cool_colorful_houses_img} placeholderSrc={brighton_cool_colorful_houses_img_small} className="picture_half" />
          <ProgressiveImg src={brighton_beach_img} placeholderSrc={brighton_beach_img_small} className="picture_half" />
        </div>
      </div>
    </>
  );
}

export default Korea;
