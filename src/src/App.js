import picture_of_me from './me.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={picture_of_me} className="picture_of_me" alt="me" />
        <p>
          My website!
        </p>
      </header>
    </div>
  );
}

export default App;
