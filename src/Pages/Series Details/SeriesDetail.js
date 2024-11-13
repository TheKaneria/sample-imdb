import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./series.css";

const SeriesDetail = () => {
  const { id } = useParams();
  const [seriesDetails, setSeriesDetails] = useState();

  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=45943d7611f1571b3e4a81ff393668b2&language=en-US`;

  const getdata = () => {
    axios
      .get(url)
      .then((res) => {
        console.log("zzzzzzzz", res.data);
        setSeriesDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${
            seriesDetails ? seriesDetails.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${
                seriesDetails ? seriesDetails.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie_detailRight ">
          <div className="movie_detailRightTop">
            <div className="movie_name">
              {seriesDetails ? seriesDetails.original_name : ""}
            </div>
            <div className="movie_tagline">
              {seriesDetails ? seriesDetails.tagline : ""}
            </div>
            <div className="movie_rating">
              {seriesDetails ? seriesDetails.vote_average.toFixed(1) : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie_voteCount">
                {seriesDetails
                  ? "(" + seriesDetails.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie_releaseDate">
              {seriesDetails
                ? "Release date: " + seriesDetails.first_air_date
                : ""}
            </div>
            <div className="w-auto ">
              Number Of Seasons : {seriesDetails?.seasons.length - 1}
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mt-4">
              <div className="fw-bold fs-5 d-flex ">Created By : </div>
              {seriesDetails && seriesDetails.created_by
                ? seriesDetails.created_by.map((author, index) => (
                    <div className="d-flex flex-row align-items-center mx-sm-3 gap-2">
                      <div className="fw-bold text-warning ">{author.name}</div>
                      <div>
                        <img
                          src={`https://image.tmdb.org/t/p/original${author.profile_path}`}
                          style={{
                            height: "30px",
                            width: "30px",
                            objectFit: "contain",
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        />
                      </div>
                    </div>
                  ))
                : ""}
            </div>

            <div className="movie_genres d-flex mt-5">
              {seriesDetails && seriesDetails.genres
                ? seriesDetails.genres.map((genre, index) => (
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
            <div className="text-center">
              {seriesDetails ? seriesDetails.overview : ""}
            </div>
          </div>
          {/* <div className="w-auto m-4">
            Adult Category : {seriesDetails?.adult === false ? "No" : "Yes"}
          </div>
          <div className="w-auto m-4">
            popularity : {seriesDetails?.popularity}
          </div> */}
        </div>
      </div>
      <div className="movie_links align-self-center">
        <div className="movie_heading">Useful Links</div>
        {seriesDetails && seriesDetails.homepage && (
          <a
            href={seriesDetails.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_homeButton movie_Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {seriesDetails && seriesDetails.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + seriesDetails.imdb_id}
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

      <div className="movie_heading text-purple-500 mt-4 font-semibold md:font-bold">
        Production companies{" "}
      </div>

      <div className="movie_production p-3 mt-0 mt-md-4 bg-light">
        {seriesDetails &&
          seriesDetails.production_companies &&
          seriesDetails.production_companies.map((company) => (
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

export default SeriesDetail;
