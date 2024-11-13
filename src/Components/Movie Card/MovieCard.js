import React, { useEffect, useState } from "react";
import "./card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure this is imported

import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              src={`http://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
              className="cards_img"
            />
            <div className="cards_overlay">
              <div className="card_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card_runtime">
                {movie ? movie.release_date : ""}
                <span className="card_rating">
                  {" "}
                  {movie ? movie.vote_average.toFixed(1) : ""}{" "}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="card_description">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}{" "}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
