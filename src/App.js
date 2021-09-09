import './App.css';
import Weather from './Components/Weather';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather cityName="ahwaz" />
      </div>
      <div className="footer">
        This project was coded by Somayeh.Mahjoob and is{" "}
        <a href="https://github.com/somayehmahjoob/SearchEngine-React">
          Open-source code on GitHub
        </a>
        , and Hosted on and{" "}
        <a href="https://lucid-agnesi-49a3e5.netlify.app/">
          hosted on Netlify{" "}
        </a>
      </div>
    </div>
  );
}

export default App;
