import picture_of_me from '../../assets/images/IMG20231014143340.jpg';
import Busan_img from '../../assets/images/IMG20230821114142.jpg';
import Daegu_img from '../../assets/images/IMG20230822174437.jpg';
import Suwon_img from '../../assets/images/IMG20231104124118.jpg';
import Sejong_img from '../../assets/images/IMG20231013141325.jpg';
import Jochiwon_img from '../../assets/images/IMG20230926185028.jpg';

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
        <TravelCityUrl name="Suwon" img={Suwon_img} />
        <TravelCityUrl name="Daegu" img={Daegu_img} />
        <TravelCityUrl name="Sejong" img={Sejong_img} />
        <TravelCityUrl name="Busan" img={Busan_img} />
        <TravelCityUrl name="Jochiwon" img={Jochiwon_img} />
      </div>
    </>
  );
}

export default Korea;
