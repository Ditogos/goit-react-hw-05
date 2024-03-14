import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function MoviesFilter({ onSubmit }) {
  const [params, setParams] = useSearchParams();

  const changeFilter = (query) => {
    params.set("query", query);
    setParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryValue = e.target.query.value.trim();
    if (!queryValue) {
      toast.error("Please enter anything in the field of search");
      return;
    }
    if (queryValue.length < 1) {
      toast.error("To shot");
      return;
    }
    if (queryValue.length > 50) {
      toast.error("To long");
      return;
    }

    changeFilter(queryValue);

    onSubmit(queryValue);
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
