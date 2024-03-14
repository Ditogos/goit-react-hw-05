import { NavLink } from "react-router-dom";

export default function MovieInfo() {
  return (
    <ul>
      <li>
        <NavLink to="cast">Cast info</NavLink>
      </li>
      <li>
        <NavLink to="reviews">Reviews</NavLink>
      </li>
    </ul>
  );
}
