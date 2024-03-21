
import tokyo_img from '../../assets/images/japan/tokyo/IMG20240217112418.jpg';
import kyoto_img from '../../assets/images/japan/kyoto/IMG20240221172948.jpg';
import osaka_img from '../../assets/images/japan/osaka/IMG20240224202110.jpg';
import yokohama_img from '../../assets/images/japan/yokohama/IMG20240220164826.jpg';
import hiroshima_img from '../../assets/images/japan/hiroshima/IMG20240225144657.jpg';

import '../../assets/css/japan.css';
import '../../assets/css/travels.css';

import TravelCityUrl from '../../components/travels_city_url';
import ProgressiveImg from '../../components/image_loading';

function Japan() {
  return (
    <>
      <h1 className='japan_title'>Japan</h1>
      <a className='japan_city_url' href='/japan/tokyo'>
            <img src={tokyo_img} />
        Tokyo
      </a>
      <a className='japan_city_url' href='/japan/yokohama'>
        <img src={yokohama_img} />
        Yokohama
      </a>
      <a className='japan_city_url' href='/japan/kyoto'>
            <img src={kyoto_img} />
        Kyoto
      </a>
      <a className='japan_city_url' href='/japan/osaka'>
        <img src={osaka_img} />
        Osaka
      </a>
      <a className='japan_city_url' href='/japan/hiroshima'>
        <img src={hiroshima_img} />
        Hiroshima
      </a>
    </>
  );
}

export default Japan;
