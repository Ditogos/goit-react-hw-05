export default function CardActor({ data }) {
  if (!data.profile_path) {
    return null;
  }

  return (
    <li key={data.id}>
      <img
        src={`https://image.tmdb.org/t/p/w200${data.profile_path}`}
        alt={data.name}
      />
      <p>
        {data.name}, Character:{data.character}
      </p>
    </li>
  );
}
