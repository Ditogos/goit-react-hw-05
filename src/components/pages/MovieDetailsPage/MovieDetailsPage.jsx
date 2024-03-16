import { Outlet, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { getMovieId } from "../../../Api/Api";

import MovieItem from "../../MovieItem/MovieItem";
import MovieInfo from "../../MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getFilmId() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getMovieId(movieId);
        setMovie(data);
      } finally {
        setIsLoading(false);
      }
    }
    getFilmId();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {error && <p>Something wrong...</p>}

      {movie && (
        <>
          <MovieItem movie={movie} />
          <div>
            <h2>Additional information:</h2>
          </div>
          <MovieInfo />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
