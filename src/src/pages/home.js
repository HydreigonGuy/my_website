import picture_of_me from '../assets/images/me.png';

import HomeCategory from '../components/home_category';

function Home() {
  return (
    <div className="home_page">
      <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/japan/yokohama/IMG20240220122833.jpg" className='background_img'/>
      <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/korea/daegu/IMG20230822174437.jpg" className='background_img_vertical'/>
      <div className='over_img_content'>
        <img src={picture_of_me} className="picture_of_me" />
          <span className='top_message'>
            Welcome to my website!
          </span>
        <br/>

        <div className='travels_content'>
          <h2>Check out my travels!</h2>
          <a href="/france">France</a>
          <a href="/korea">Korea</a>
          <a href="/china">China</a>
          <a href="/japan">Japan</a>
          <a href="/uk">UK</a>
        </div>
      </div>

      <div className='contact_bar'>
          <p>Contact Me!</p>
          <br/>
          <a className='contact_url' href='https://www.instagram.com/hydreigon_chad?igsh=MWxxcjM0cjZ0YnM2Nw==' target='_blank'>Instagram</a>
          <a className='contact_url' href='https://www.linkedin.com/in/adrien-thibault/' target='_blank'>Linkedin</a>
          <a className='contact_url' href='https://github.com/HydreigonGuy' target='_blank'>Github</a>
          {/*<a className='contact_url' href='adrien.thibault@epitech.eu' target='_blank'>Email</a>*/}
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
