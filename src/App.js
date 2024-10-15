import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6c148b3d78a635913eba9886ba0b1d97",
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.response);
      setMatch(data.response);
    })
    .catch((error) => console.log("error", error));
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          FUTMANIA
        </h1>
        <nav className='menuNav'>
          <ul><a href='#'>LIGAS</a></ul>
          <ul><a href='#'>EN VIVO</a></ul>
          <ul><a href='#'>TOPS</a></ul>
        </nav>
      </header>
      <div id="wg-api-football-games"
          data-host="v3.football.api-sports.io"
          data-key="6c148b3d78a635913eba9886ba0b1d97"
          data-date=""
          data-league=""
          data-season=""
          data-theme=""
          data-refresh="30"
          data-show-toolbar="true"
          data-show-errors="false"
          data-show-logos="false"
          data-modal-game="true"
          data-modal-standings="true"
          data-modal-show-logos="true"
          class="match-live">
      </div>
    </div>
  );
}

export default App;
