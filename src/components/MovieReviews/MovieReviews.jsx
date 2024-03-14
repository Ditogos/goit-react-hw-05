import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviews } from "../../Api/Api";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await movieReviews(movieId);
        setReviews(data);
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
      {error && <p>Something wrong...</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && <p>We dont have any reviews for this movie</p>}
    </>
  );
}
