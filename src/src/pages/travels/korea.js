import picture_of_me from '../../assets/images/korea/IMG20231014143340.jpg';
import Busan_img from '../../assets/images/korea/busan/IMG20230821114142.jpg';
import Daegu_img from '../../assets/images/korea/daegu/IMG20230822174437.jpg';
import Suwon_img from '../../assets/images/korea/suwon/IMG20231104124118.jpg';
import Sejong_img from '../../assets/images/korea/sejong/IMG20231013141325.jpg';
import Jochiwon_img from '../../assets/images/korea/jochiwon/IMG20230926185028.jpg';

import picture_of_me_small from '../../assets/images/korea/small/IMG20231014143340.jpg';
import Busan_img_small from '../../assets/images/korea/busan/small/IMG20230821114142.jpg';
import Daegu_img_small from '../../assets/images/korea/daegu/small/IMG20230822174437.jpg';
import Suwon_img_small from '../../assets/images/korea/suwon/small/IMG20231104124118.jpg';
import Sejong_img_small from '../../assets/images/korea/sejong/small/IMG20231013141325.jpg';
import Jochiwon_img_small from '../../assets/images/korea/jochiwon/small/IMG20230926185028.jpg';

import '../../assets/css/korean.css';
import '../../assets/css/travels.css';

import TravelCityUrl from '../../components/travels_city_url';
import ProgressiveImg from '../../components/image_loading';

function Korea() {
  return (
    <>
      <div className='korean_page korean'>
        <ProgressiveImg src={picture_of_me} placeholderSrc={picture_of_me_small} className="picture" />
        <span>Here you can find pictures and information about my travels accross Korea!</span>
        <br/>
        <TravelCityUrl name="Suwon" img={Suwon_img} comment="수원" url="/korea/suwon" small_img={Suwon_img_small} />
        <TravelCityUrl name="Daegu" img={Daegu_img} comment="대구" url='/korea/daegu' small_img={Daegu_img_small} />
        <TravelCityUrl name="Sejong" img={Sejong_img} comment="세종" url="/korea/sejong" small_img={Sejong_img_small} />
        <TravelCityUrl name="Busan" img={Busan_img} comment="부산" url="/korea/busan" small_img={Busan_img_small} />
        <TravelCityUrl name="Jochiwon" img={Jochiwon_img} comment="조치원" url="/korea/jochiwon" small_img={Jochiwon_img_small} />
      </div>
    </>
  );
}

export default Korea;
