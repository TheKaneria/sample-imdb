import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import MovieList from "./Components/Movie List/MovieList";
import MovieDetail from "./Pages/Movie Details/MovieDetail";
import ErrorPage from "./Pages/Error/ErrorPage";
import BootStrap from "./Pages/Bootstrap/BootStrap";
import SeriesDetail from "./Pages/Series Details/SeriesDetail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="series/:id" element={<SeriesDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/*" element={<ErrorPage />}></Route>
          <Route path="/boot" element={<BootStrap />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
