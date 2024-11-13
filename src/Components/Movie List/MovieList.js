import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./movielist.css";
import MovieCard from "../Movie Card/MovieCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import CustomPagination from "../Pagination/Pagination";
import Header from "../Header/Header";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [numOfPages, setnumOfPages] = useState(1);
  const [load, setLoad] = useState(false);
  const [load2, setLoad2] = useState(false);

  const url = `https://api.themoviedb.org/3/movie/${
    type ? type : "popular"
  }?api_key=45943d7611f1571b3e4a81ff393668b2`;

  useEffect(() => {
    getData(`${url}&page=${page}`);
  }, [page]);

  useEffect(() => {
    if (type) {
      getData2();
    }
  }, [type]);
  const getData = async (url) => {
    setLoad(true);
    try {
      const res = await axios.get(url);
      setMovieList(res.data.results);
      setPage(res.data.page);
      setLoad(false);
      setnumOfPages(res.data.total_pages);
    } catch (err) {
      console.error("Error in getData Function plij Check : ", err);
      setLoad(false);
    }
  };

  const getData2 = async () => {
    setLoad2(true);
    try {
      const res = await axios.get(url);
      setMovieList(res.data.results);
      setPage(res.data.page);
      setLoad2(false);
      setnumOfPages(res.data.total_pages);
    } catch (err) {
      console.error("Error fetching data:", err);
      setLoad2(false);
    }
  };

  return (
    <>
      <div className="movie_list">
        <h2 className="list_title">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
        <div className="list_cards">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
  );
};

export default MovieList;
