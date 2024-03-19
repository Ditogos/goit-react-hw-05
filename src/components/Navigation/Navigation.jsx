import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.navigation}>
      <NavLink to="/">
        <h1 className={css.navigationLink}>Home</h1>
      </NavLink>
      <NavLink to="/movies">
        <h1 className={css.navigationLink}>Movies</h1>
      </NavLink>
    </nav>
  );
}
