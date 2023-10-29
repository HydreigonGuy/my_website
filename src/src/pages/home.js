import picture_of_me from '../assets/images/me.png';

function Home() {
  return (
    <>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <p>
          My website!
        </p>
    </>
  );
}

export default Home;
