import picture_of_me from '../../assets/images/korea/IMG20231014143340.jpg';
import Busan_img from '../../assets/images/korea/busan/IMG20230821114142.jpg';
import Daegu_img from '../../assets/images/korea/daegu/IMG20230822174437.jpg';
import Suwon_img from '../../assets/images/korea/suwon/IMG20231104124118.jpg';
import Sejong_img from '../../assets/images/korea/sejong/IMG20231013141325.jpg';
import Jochiwon_img from '../../assets/images/korea/jochiwon/IMG20230926185028.jpg';

import '../../assets/css/korean.css';
import '../../assets/css/travels.css';

import TravelCityUrl from '../../components/travels_city_url';

function Korea() {
  return (
    <>
      <div className='korean_page korean'>
        <img src={picture_of_me} className="picture" />
        <span>Here you can find pictures and information about my travels accross Korea!</span>
        <br/>
        <TravelCityUrl name="Suwon" img={Suwon_img} comment="수원" url="/korea/suwon" />
        <TravelCityUrl name="Daegu" img={Daegu_img} comment="대구" url='/korea/daegu' />
        <TravelCityUrl name="Sejong" img={Sejong_img} comment="세종" />
        <TravelCityUrl name="Busan" img={Busan_img} comment="부산" />
        <TravelCityUrl name="Jochiwon" img={Jochiwon_img} comment="조치원" url="/korea/jochiwon" />
      </div>
    </>
  );
}

export default Korea;
