import './App.css';
import { TikTokEmbed } from './components';

function App() {
  return (
    <div>
      <header>
        <h1>No Bones Tracker</h1>
        <p className="subtitle">Did the pug have bones today?</p>
      </header>
      <hr/>
      <TikTokEmbed />
      <footer>
        <hr />
        <div class="bottom">
          Made with <span class="heart">❤</span> by Guthrie Schoolar
        </div>
      </footer>
    </div>
  );
}

export default App;
