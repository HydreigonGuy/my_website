// import img from '../../assets/images/japan/_.jpg';

import '../../assets/css/japan.css';
import '../../assets/css/travels.css';

import TravelCityUrl from '../../components/travels_city_url';
import ProgressiveImg from '../../components/image_loading';

function Japan() {
  return (
    <>
      <h1>Japan</h1>
      <a className='japan_city_url' href='/japan/tokyo'>Tokyo</a>
      <a className='japan_city_url' href='/japan/yokohama'>Yokohama</a>
      <a className='japan_city_url' href='/japan/kyoto'>Kyoto</a>
      <a className='japan_city_url' href='/japan/osaka'>Osaka</a>
      <a className='japan_city_url' href='/japan/hiroshima'>Hiroshima</a>
    </>
  );
}

export default Japan;
