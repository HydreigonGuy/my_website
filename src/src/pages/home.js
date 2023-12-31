import picture_of_me from '../assets/images/me.png';

import HomeCategory from '../components/home_category';

function Home() {
  return (
    <div className="App">
      <div className='home_header'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <span>
          Welcome to my website!
        </span>
        <p>
        <HomeCategory title="My travels" items={[
          {"href":"/korea", "name":"Korea"},
          {"href":"/uk", "name":"UK"}
        ]}/>
        <HomeCategory title="My cheat sheets" items={[
          {"href":"/korean", "name":"Korean"},
          {"href":"/devops", "name":"DevOps"}
        ]}/>
        </p>
      </div>
    </div>
  );
}

export default Home;
