import { lazy, Suspense } from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";
import Navigation from "../Navigation";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";

const HomePage = lazy(() => import("../pages/HomePages"));
const MoviePage = lazy(() => import("../pages/MoviePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Router>
        <Navigation></Navigation>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviePage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="credits" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Router>
    </Suspense>
  );
}
