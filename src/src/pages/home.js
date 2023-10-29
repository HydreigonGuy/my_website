import picture_of_me from '../assets/images/me.png';

function Home() {
  return (
    <>
      <div className='home_header'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <span>
          Welcome to my website!
          <br/>
          <p className='korean'>
            안녕 하십니까?
          </p>
        </span>
      </div>
    </>
  );
}

export default Home;
