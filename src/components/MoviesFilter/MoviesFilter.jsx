import { useSearchParams } from "react-router-dom";

export default function MoviesFilter() {
  const [params, setParams] = useSearchParams();

  const changeFilter = (newFilter) => {
    params.set("query", newFilter);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      console.error("Please enter anything in the field of search");
      return;
    }
    if (query.length < 1) {
      console.error("To shot");
      return;
    }
    if (query.length > 50) {
      console.error("To long");
      return;
    }

    changeFilter(query);

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoFocus={true} required></input>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
