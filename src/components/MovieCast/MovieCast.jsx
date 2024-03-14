import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../Api/Api";
import Loader from "../Loader/Loader";
import GalleryActor from "../GalleryActor/GalleryActor";

export default function MovieCast() {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(null);
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setActor(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {<div className={css.center}>{isLoading && <Loader />}</div>}
      {error && <p>Something wrong...</p>}
      {actor.length === 0 && !isLoading && !error && (
        <p>No information available about the movie cast.</p>
      )}
      <GalleryActor data={actor} />
    </>
  );
}
