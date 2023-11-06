import picture_of_me from '../../assets/images/me.png';
import korea_picture_1 from '../../assets/images/IMG20230821101728.jpg';
import korea_picture_2 from '../../assets/images/IMG20230821112915.jpg';
import korea_picture_3 from '../../assets/images/IMG20230821114142.jpg';
import korea_picture_4 from '../../assets/images/IMG20230822162230.jpg';
import korea_picture_5 from '../../assets/images/IMG20230822174058.jpg';
import korea_picture_6 from '../../assets/images/IMG20230822174437.jpg';

import '../../assets/css/korean.css';

function Korea() {
  return (
    <>
      <div className='korean_page'>
        <img src={korea_picture_3} className="picture" />
        <img src={korea_picture_4} className="picture" />
        <img src={korea_picture_5} className="picture" />
        <img src={korea_picture_1} className="picture" />
        <img src={korea_picture_2} className="picture" />
        <img src={korea_picture_6} className="picture" />
      </div>
    </>
  );
}

export default Korea;
