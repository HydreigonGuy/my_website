import picture_of_me from '../assets/images/me.png';
import background_image from '../assets/images/japan/yokohama/IMG20240220122833.jpg';
import background_image_vertical from '../assets/images/korea/daegu/IMG20230822174437.jpg';
import background_image_small from '../assets/images/japan/yokohama/small/IMG20240220122833.jpg';
import background_image_vertical_small from '../assets/images/korea/daegu/small/IMG20230822174437.jpg';

import HomeCategory from '../components/home_category';

import ProgressiveImg from '../components/image_loading';

function Home() {
  return (
    <div className="home_page">
      <ProgressiveImg src={background_image} placeholderSrc={background_image_small} className='background_img'/>
      <ProgressiveImg src={background_image_vertical} placeholderSrc={background_image_vertical_small} className='background_img_vertical'/>
      <div className='over_img_content'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
          <span className='top_message'>
            Welcome to my website!
          </span>
        <br/>

        <div className='travels_content'>
          <h2>Check out my travels!</h2>
          <a href="/korea">Korea</a>
          <a href="/china">China</a>
          <a href="/japan">Japan</a>
          <a href="/uk">UK</a>
        </div>
      </div>
    {/*
    <div className="App">
      <div className='home_header'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <span>
          Welcome to my website!
        </span>
        <p>
        <HomeCategory title="My travels" items={[
          {"href":"/korea", "name":"Korea"},
          {"href":"/china", "name":"China"},
          {"href":"/uk", "name":"UK"},
          {"href":"/japan", "name":"Japan"}
        ]}/>
        <HomeCategory title="My cheat sheets" items={[
          {"href":"/korean", "name":"Korean"},
          {"href":"/devops", "name":"DevOps"}
        ]}/>
        </p>
      </div>
    </div>
      */}
    </div>
  );
}

export default Home;
