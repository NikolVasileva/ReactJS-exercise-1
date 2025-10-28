import movies from "./model/movies.js";
import Headline from '../Headline.jsx'
import Body from "../Body.jsx";
import './App.css'

function App() {
  return (
    <main>
      <Headline />

      <Body movies={movies} />
    </main>
  );
}

export default App
