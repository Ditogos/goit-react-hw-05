import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../Api/Api";
import Loader from "../Loader/Loader";
import GalleryActor from "../GalleryActor/GalleryActor";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMovieCredits(movieId);
        setActor(data);
      } catch (error) {
        setError("Something went wrong while fetching movie credits.");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <p className={css.error}>Something wrong...</p>}
      {actor.length === 0 && !isLoading && !error && (
        <p className={css.noInfo}>
          No information available about the movie cast.
        </p>
      )}
      <GalleryActor data={actor} />
    </div>
  );
}
