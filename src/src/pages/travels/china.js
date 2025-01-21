
import '../../assets/css/china.css';
import '../../assets/css/travels.css';


function China() {
    return (
        <>
        <div className='china_body'>
            <h1 className='china_title'>
                {/*<img className="china_title_img" src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/flags/china.png"/>*/}
                China
                中国
            </h1>
            <div className='place_url_link'>
                <a href='/china/beijing' className='china_city_url'>
                    <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/china/beijing/IMG20240110101709.jpg"/>
                    <h2>Beijing</h2>
                    <h3>北京</h3>
                </a>
            </div>
            <div className='place_url_link'>
                <a href='/china/shanghai'className='china_city_url'>
                    <img src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/china/shang-hai/IMG20240624201921.jpg"/>
                    <h2>Shanghai</h2>
                    <h3>上海</h3>
                </a>
            </div>
        </div>
        </>
    );
}

export default China;
