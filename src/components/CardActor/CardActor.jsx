import css from "./CardActor.module.css";

export default function CardActor({ data }) {
  if (!data.profile_path) {
    return null;
  }

  return (
    <li key={data.id} className={css.actorContainer}>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
        alt={data.name}
        className={css.actorImage}
      />
      <p className={css.actorText}>
        {data.name}, Character:{data.character}
      </p>
    </li>
  );
}
