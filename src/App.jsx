import movie from "./model/movies.js"
import Headline from '../Headline.jsx'
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
