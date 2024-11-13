import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Fade, Hinge } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import MovieList from "../../Components/Movie List/MovieList";
import Header from "../../Components/Header/Header";

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=45943d7611f1571b3e4a81ff393668b2";

const url2 = "https://api.themoviedb.org/3/trending/tv/day";

const Home = () => {
  const [popularMovies, setpopularMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setnumOfPages] = useState(1);

  const fetchMovie = async (url) => {
    axios
      .get(url)
      .then((res) => {
        setpopularMovies(res.data.results);
        setPage(res.data.page);
        setnumOfPages(res.data.total_pages);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie(`${url}&page=${page}`);
  }, []);

  const tvdata = async (url) => {
    await axios
      .get(url, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTk0M2Q3NjExZjE1NzFiM2U0YTgxZmYzOTM2NjhiMiIsIm5iZiI6MTcyMTY0Mjg3MC4zNTcxMTYsInN1YiI6IjY1Mzc3NjRiN2ZjYWIzMDBhZDdlMjg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bI4AcuI7VVL54vXH7bPWou2iII0nLii2gD9eqSyhAps",
        },
      })

      .then((res) => {
        console.log("zzzzzzzzzz", res.data.results);
        setSeries(res.data.results);
        setPage(res.data.page);
        setnumOfPages(res.data.total_pages);
      })
      .catch((err) => {
        console.log("Error in Series Tv Api", err);
      });
  };

  useEffect(() => {
    tvdata(url2);
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          autoPlay={true}
          transitionTime={3}
          interval={2500}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          preventMovementUntilSwipeScrollTolerance
        >
          {series.map((movie) => {
            return (
              <>
                <Link
                  to={`series/${movie.id}}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div className="posterImage">
                    <img
                      src={`http://image.tmdb.org/t/p/original${
                        movie && movie.backdrop_path
                      }`}
                      alt="movie poster"
                    />
                  </div>
                  <div className="posterImage_overlay">
                    <div className="posterImage_title">
                      <Fade>{movie ? movie.name : ""}</Fade>
                    </div>
                    <div className="posterImage_runtime">
                      {movie ? movie.first_air_date : ""}
                      <span className="posterImage_rating">
                        {movie ? movie.vote_average.toFixed(1) : ""}{" "}
                        <i className="fas fa-star" />{" "}
                      </span>
                    </div>
                    <div className="posterImage_description">
                      {movie ? movie.overview : ""}
                    </div>
                    <div className="posterImage_description_1">
                      {movie ? movie.overview.slice(0, 100) + "..." : ""}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
