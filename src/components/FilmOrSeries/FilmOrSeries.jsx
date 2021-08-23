import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmOrSeriesAction } from "../../redux/moviesReducer";

function FilmOrSeries() {
  const [val, setVal] = useState('all');
  const dispatch = useDispatch()
  const filmOrSeries = useSelector(state=>state.movies.filmOrSeries)
  function handleChecked(e) {
    dispatch(filmOrSeriesAction(e.target.value))
  }
  return (
    <div className="film-or-series">
      <label>
        <input
          className="with-gap purple accent-1"
          name="group3"
          type="radio"
          value=""
          checked={filmOrSeries === "" ? true : false}
          onChange={handleChecked}
        />
        <span>All</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          type="radio"
          value="movie"
          checked={filmOrSeries === "movie" ? true : false}
          onChange={handleChecked}
        />
        <span>Movies</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          type="radio"
          value="series"
          checked={filmOrSeries === "series" ? true : false}
          onChange={handleChecked}
        />
        <span>Series</span>
      </label>
    </div>
  );
}

export default FilmOrSeries;
