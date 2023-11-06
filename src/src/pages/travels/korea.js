import picture_of_me from '../../assets/images/IMG20231014143340.jpg';
import korea_picture_1 from '../../assets/images/IMG20230821101728.jpg';
import korea_picture_2 from '../../assets/images/IMG20230821112915.jpg';
import Busan_img from '../../assets/images/IMG20230821114142.jpg';
import korea_picture_4 from '../../assets/images/IMG20230822162230.jpg';
import korea_picture_5 from '../../assets/images/IMG20230822174058.jpg';
import Daegu_img from '../../assets/images/IMG20230822174437.jpg';
import Suwon_img from '../../assets/images/IMG20231104124118.jpg';

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
        <TravelCityUrl name="Busan" img={Busan_img} />
      </div>
    </>
  );
}

export default Korea;
