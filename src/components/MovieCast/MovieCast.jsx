import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await movieCredits(movieId);

        setActor(data);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {isLoading && <div>loading...</div>}

      {actor.length > 0 && (
        <ul className={css.list}>
          {actor.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <div>
                <img
                  src={
                    profile_path
                      ? "https://image.tmdb.org/t/p/w500" + profile_path
                      : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
                  }
                  width={250}
                  height={400}
                  alt={name}
                />
                <p>{name ? name : "information is absent"}</p>
                <p>
                  Character: {character ? character : "information is absent"}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!actor.length && <p>We dont have any actors for this movie</p>}
    </>
  );
}
