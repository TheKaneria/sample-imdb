import React, { useEffect, useState } from "react";
import "./moviedetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=45943d7611f1571b3e4a81ff393668b2&language=en-US`;

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("rrrrrrr", res.data);
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${
            movieDetails ? movieDetails.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${
                movieDetails ? movieDetails.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie_name">
              {movieDetails ? movieDetails.original_title : ""}
            </div>
            <div className="movie_tagline">
              {movieDetails ? movieDetails.tagline : ""}
            </div>
            <div className="movie_rating">
              {movieDetails ? movieDetails.vote_average.toFixed(1) : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie_voteCount">
                {movieDetails ? "(" + movieDetails.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie_runtime">
              {movieDetails ? movieDetails.runtime + " mins" : ""}
            </div>
            <div className="movie_releaseDate">
              {movieDetails ? "Release date: " + movieDetails.release_date : ""}
            </div>
            <div className="movie_genres">
              {movieDetails && movieDetails.genres
                ? movieDetails.genres.map((genre, index) => (
                    <>
                      <span className="movie_genre" id={genre.id} key={index}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{movieDetails ? movieDetails.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie_links ">
        <div className="movie_heading">Useful Links</div>
        {movieDetails && movieDetails.homepage && (
          <a
            href={movieDetails.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p className="mb-3">
              <span className="movie_homeButton movie_Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {movieDetails && movieDetails.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + movieDetails.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_imdbButton movie_Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>

      <div className="movie_heading text-purple-500 font-semibold sm:font-bold mt-4 ">
        Production companies{" "}
      </div>

      <div className="movie_production p-3 mt-0 mt-md-3 bg-light">
        {movieDetails &&
          movieDetails.production_companies &&
          movieDetails.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie_productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span
                    className="fw-bold text-danger"
                    style={{ color: "black" }}
                  >
                    {company.name}
                  </span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default MovieDetail;
