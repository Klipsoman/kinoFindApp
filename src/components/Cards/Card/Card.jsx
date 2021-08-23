import React from "react";
import { useDispatch } from "react-redux";
import { API } from "../../../api/api";
import imageNotFound from "../../../assets/images/notFound.jpg";
import { setIsModal } from "../../../redux/moviesReducer";

function Card(props) {
  const { Title, Poster, Year } = { ...props.movie };
  const dispatch = useDispatch()
  function handleSearchThisFilm(e){
    dispatch(setIsModal(true))
    API.thisFilmSearch(dispatch, Title)
  }
  return (
    <div className="card">
      <div className="card-image">
        <img src={Poster !== "N/A" ? Poster : imageNotFound} />
      </div>
      <div className="card-content">
        <p>
          <span>{Year}</span>
        </p>
      </div>
      <div className="card-action">
        <a onClick={handleSearchThisFilm}>{Title}</a>
      </div>
    </div>
  );
}

export default Card;
