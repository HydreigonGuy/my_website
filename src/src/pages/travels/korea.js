import picture_of_me from '../../assets/images/korea/IMG20231014143340.jpg';

import picture_of_me_small from '../../assets/images/korea/small/IMG20231014143340.jpg';

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
        <TravelCityUrl name="Seoul" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/seoul/IMG20231014142928.jpg" comment="서울" url="/korea/seoul" />
        <TravelCityUrl name="Jeju" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/jeju/IMG20240427100337.jpg" comment="제주" url='/korea/jeju' />
        <TravelCityUrl name="Daegu" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/daegu/IMG20230822174437.jpg" comment="대구" url='/korea/daegu' />
        <TravelCityUrl name="Busan" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/busan/IMG20230821114142.jpg" comment="부산" url="/korea/busan" />
        <TravelCityUrl name="Gwangju" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/gwangju/IMG20231202122651.jpg" comment="광주" url="/korea/gwangju" />
        <TravelCityUrl name="Daejeon" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/daejeon/IMG20231002194202.jpg" comment="대전" url="/korea/daejeon" />
        <TravelCityUrl name="Suwon" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/suwon/IMG20231104124118.jpg" comment="수원" url="/korea/suwon" />
        <TravelCityUrl name="Sejong" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/sejong/IMG20231013141325.jpg" comment="세종" url="/korea/sejong" />
        <TravelCityUrl name="Jochiwon" img="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/jochiwon/IMG20240118152505.jpg" comment="조치원" url="/korea/jochiwon" />
      </div>
    </>
  );
}

export default Korea;
