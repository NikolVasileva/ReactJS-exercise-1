import Movie from './Movie.jsx';

export default function Body({ movies }) {
  return (
    <section className="movies">
      {movies.map((m) => (
        <Movie
          key={m.id}
          title={m.title}
          year={m.year}
          director={m.director}
          runtime={m.runtime}
          genres={m.genres}
          plot={m.plot}
          posterUrl={m.posterUrl}
          background={m.background}
        />
      ))}
    </section>
  );
}
