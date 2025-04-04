
import '../../assets/css/france.css';


function France() {
  return (
    <>
      <h1 className='title'>France</h1>
      <div className='images_body'>
        <div className='cityTitleBlock'>
          <a href='/france/paris' className='cityTitle'>Paris</a>
          <a href='/france/toulouse' className='cityTitle'>Toulouse</a>
          <a href='/france/lyon' className='cityTitle'>Lyon</a>
        </div>
        <a href='/france/paris'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/paris/IMG20240914202245.jpg"/></a>
        <a href='/france/toulouse'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/toulouse/IMG20240711104504.jpg"/></a>
        <a href='/france/lyon'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/lyon/IMG20250330125347.jpg"/></a>
      </div>
      <div className='images_body'>
        <div className='cityTitleBlock'>
          <a href='/france/niort' className='cityTitle'>Niort</a>
          <a href='/france/collioure' className='cityTitle'>Collioure</a>
          <a href='/france/re' className='cityTitle'>Ars en Ré</a>
        </div>
        <a href='/france/niort'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/niort/IMG20240809142103.jpg" /></a>
        <a href='/france/collioure'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/collioure/IMG20240725115503.jpg"/></a>
        <a href='/france/re'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/ile-de-re/IMG20240811084955.jpg" /></a>
      </div>
      <div className='images_body'>
        <div className='cityTitleBlock'>
          <a href='/france/leucate' className='cityTitle'>Canet / Leucate</a>
        </div>
        <a href='/france/leucate'><img className='image' src="https://raw.githubusercontent.com/HydreigonGuy/my_website/refs/heads/images/images/travels/france/leucate/IMG20240724190037.jpg"/></a>
      </div>
    </>
  );
}

export default France;
