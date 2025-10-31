import movie from "./model/movies.js"
import Headline from "./Components/Headline.jsx"
import Body from "./Components/Body.jsx";
import './App.css'

function App() {
  return (
    <main>
      <Headline />

      <Body movies={movie} />
    </main>
  );
}

export default App
