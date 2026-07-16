
import './App.css'
import MovieCard from './assets/components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Terminator", release_date: "2020"}}/>
    </>
  );
}

export default App;
