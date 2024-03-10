import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  const notFindImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  return (
    <ul>
      {movies.map((film) => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <div>
              <img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                    : notFindImg
                }
                width={250}
                alt="poster"
              />
            </div>
            <div>
              <p>{film.title || film.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
