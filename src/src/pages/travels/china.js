
import tianamen_square_img from '../../assets/images/china/IMG20240107134632.jpg';

import '../../assets/css/china.css';
import '../../assets/css/travels.css';


function China() {
    return (
        <>
        <div className='china_header_image_container'>
        <img src={tianamen_square_img} className="china_header_image" />
        </div>
        <div className='china_body'>
            <h1>China</h1>
        </div>
        </>
    );
}

export default China;
