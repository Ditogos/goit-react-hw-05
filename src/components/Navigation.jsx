import { NavLink } from "react-router-dom";
import HomePages from "./pages/HomePages";
import MoviePage from "./pages/MoviePage";

export default function Navigation() {
  return (
    <>
      <Navigation />

      <NavLink exact path="/" element={HomePages} />
      <NavLink path="/movies" element={MoviePage} />
    </>
  );
}
