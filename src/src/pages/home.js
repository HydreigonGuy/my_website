import picture_of_me from '../assets/images/me.png';

function Home() {
  return (
    <>
      <div className='home_header'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <span>
          Welcome to my website!
        </span>
      </div>
    </>
  );
}

export default Home;
