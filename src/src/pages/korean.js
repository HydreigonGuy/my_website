import picture_of_me from '../assets/images/me.png';
import korea_picture_1 from '../assets/images/IMG20230821101728.jpg';
import korea_picture_2 from '../assets/images/IMG20230821112915.jpg';
import korea_picture_3 from '../assets/images/IMG20230821114142.jpg';
import korea_picture_4 from '../assets/images/IMG20230822162230.jpg';
import korea_picture_5 from '../assets/images/IMG20230822174058.jpg';
import korea_picture_6 from '../assets/images/IMG20230822174437.jpg';

import '../assets/css/korean.css';

function Korean() {
  return (
    <>
      <div className='korean_page'>
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <span className='korean no_top_margin'>
            안녕하십니까?
            <br/>
            제 이름은 아드리엥입니다.
            <br/>
            제 국적은 프랑스 사람입니다.
            <br/>
            제 직업은 학생입니다.
            <br/>
            만나서 반갑습니다.
        </span>
        <br/>
        <img src={korea_picture_3} className="picture" />
        <img src={korea_picture_4} className="picture" />
        <img src={korea_picture_5} className="picture" />
        <p className='korean'>
          My korean cheat sheet:
          <br/>
          wait - 기다려
          <br/>
          careful - 조심 -- caution - 손조심
          <br/>
          dangerous - 위험
          <br/>
          delicious - 맛있어 - or more formal - 맛있어요
          <br/>
          long time no see - 오랜만이네요
        </p>
        <img src={korea_picture_1} className="picture" />
        <img src={korea_picture_2} className="picture" />
        <img src={korea_picture_6} className="picture" />
      </div>
    </>
  );
}

export default Korean;
