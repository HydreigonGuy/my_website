
import me_big_ben_img from '../../assets/images/uk/Snapchat-716959219.jpg';
import me_buckingham_img from '../../assets/images/uk/Snapchat-1705563956.jpg';
import me_idk_img from '../../assets/images/uk/Snapchat-566078020.jpg';

import '../../assets/css/uk.css';
import '../../assets/css/travels.css';

function UK() {
  return (
    <>
      <div className='korean_page korean'>
        <img src={me_big_ben_img} className="exact_third" />
        <img src={me_buckingham_img} className="exact_third" />
        <img src={me_idk_img} className="exact_third" />
        <h1 className='uk_title'>UK</h1>
        <div>
          <a href='/uk/london' className='uk_city_link'>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/london/IMG20230325140520.jpg" className="uk_city_url_img" />
            <h3>London</h3>
          </a>
          <a href='/uk/york' className='uk_city_link'>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/york/IMG20241113162256.jpg" className="uk_city_url_img" />
            <h3>York</h3>
          </a>
          <a href='/uk/newcastle' className='uk_city_link'>
            <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/uk/newcastle/IMG20241116103007.jpg" className="uk_city_url_img" />
            <h3>Newcastle</h3>
          </a>
        </div>
      </div>
    </>
  );
}

export default UK;
