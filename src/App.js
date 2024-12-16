import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import MovieList from "./Components/Movie List/MovieList";
import MovieDetail from "./Pages/Movie Details/MovieDetail";
import ErrorPage from "./Pages/Error/ErrorPage";
import BootStrap from "./Pages/Bootstrap/BootStrap";
import SeriesDetail from "./Pages/Series Details/SeriesDetail";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-JRQQ62SGC8");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
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
