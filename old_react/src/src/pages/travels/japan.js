
import '../../assets/css/japan.css';
import '../../assets/css/travels.css';

function Japan() {
  return (
    <>
      <div className='japan_title_bg'>
        <h1 className='japan_title'>Japan 日本</h1>
      </div>
      <a className='japan_city_url' href='/japan/tokyo'>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/tokyo/IMG20240217112418.jpg" />
        <h3>Tokyo</h3>
      </a>
      <a className='japan_city_url' href='/japan/yokohama'>
        <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/yokohama/IMG20240220164826.jpg" />
        <h3>Yokohama</h3>
      </a>
      <a className='japan_city_url' href='/japan/kyoto'>
        <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/kyoto/IMG20240221172948.jpg" />
        <h3>Kyoto</h3>
      </a>
      <a className='japan_city_url' href='/japan/osaka'>
        <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/osaka/IMG20240224202110.jpg" />
        <h3>Osaka</h3>
      </a>
      <a className='japan_city_url' href='/japan/hiroshima'>
        <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/hiroshima/IMG20240225144657.jpg" />
        <h3>Hiroshima</h3>
      </a>
    </>
  );
}

export default Japan;
