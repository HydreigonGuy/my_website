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
            안녕하십니까?
            <br/>
            제이름은 아드리엥입니다.
            <br/>
            제국적은 프랑스 사람입니다.
            <br/>
            제직업은 학생입니다.
            <br/>
            만나서 반갑습니다.
          </p>
        </span>
      </div>
    </>
  );
}

export default Home;
