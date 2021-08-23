import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../api/api";
import { setSearch } from "../../redux/moviesReducer";
import FilmOrSeries from "../FilmOrSeries/FilmOrSeries";

function Search() {
  const [val, setVal] = useState('')
  const search = useSelector(state=>state.movies.search)
  const filmOrSeries = useSelector(state=>state.movies.filmOrSeries)
  const dispatch = useDispatch()
  function handleChange(e){
    setVal(e.target.value)
    dispatch(setSearch(e.target.value))
  }
  function handleSearch(){
      if (val.length < 3) return 
      API.search(dispatch, search, filmOrSeries)
  }
  function handleKeyDown(e){
    if (val.length < 3) return
    if(e.key === 'Enter') API.search(dispatch, search, filmOrSeries)
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
              placeholder="Enter the name of the movie or series"
              value={val}
              minLength="3"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              
            />
            <button className="waves-effect waves-light btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <FilmOrSeries />
        </div>
      </div>
    </div>
  );
}

export default Search;
