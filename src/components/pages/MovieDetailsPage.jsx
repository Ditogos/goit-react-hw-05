import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { movieId } from "../../Api/Api";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await movieId(movieId);
        setMovie(data);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <div>Loading..</div>}

      <Link to={backLinkRef.current}>Go back</Link>
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
            }
            width="350"
            alt={movie.title}
          />

          <div>
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <div>{movie.genres.map((el) => el.name).join(" ")}</div>
          </div>
        </div>
      )}
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="credits">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
