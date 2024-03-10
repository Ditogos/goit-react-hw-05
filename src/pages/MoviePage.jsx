export default function MoviePage() {
  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search"
        autoComplete="off"
        autoFocus
      ></input>
      <button type="submit">Search</button>
    </div>
  );
}
