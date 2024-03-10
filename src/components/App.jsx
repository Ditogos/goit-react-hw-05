import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Navigation = lazy(() => import("../components/Navigation"));

const HomePages = lazy(() => import("../pages/HomePages"));
const MoviePage = lazy(() => import("../pages/MoviePage"));

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/movies" element={<MoviePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
