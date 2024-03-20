import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const activeClassLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeClassLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeClassLink}>
        Movies
      </NavLink>
    </nav>
  );
}
