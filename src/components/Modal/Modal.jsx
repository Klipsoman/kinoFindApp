import React from "react";
import { useDispatch, useSelector } from "react-redux";
import imageNotFound from "../../assets/images/notFound.jpg";
import { setIsModal } from "../../redux/moviesReducer";
import Preloader from "../Preloader/Preloader";

function Modal() {
  const film = useSelector(state => state.movies.movie);
  const isModalLoading = useSelector(state => state.movies.isModalLoading)
  const dispatch = useDispatch()
  const {
    Title,
    Poster,
    Year,
    Plot,
    Actors,
    Country,
    Director,
    Writer,
    Released,
  } = { ...film };

  function handleCloseModal(e){
    if(e.target === e.currentTarget) dispatch(setIsModal(false))
  }

  if (film?.Error) return <div className="row modal" onClick={handleCloseModal}>  
  <div className="error-found">
    <div className="close-modal-x" onClick={()=>dispatch(setIsModal(false))}>X</div>
    <h1>Not availible data :(</h1>
  </div>    
</div>

  return (
    <div className="row modal" onClick={handleCloseModal}>
      {isModalLoading ? <Preloader/> : <div className="modal-body">
        <div className="close-modal-x" onClick={()=>dispatch(setIsModal(false))}>X</div>
        <h2>{film !== null ? Title : <></>}</h2>
        <h5>{film !== null ? Released : <></>}</h5>

        <div className="card-content">
          <div className="card-image">
            <img src={film !== null && Poster != 'N/A'? Poster : imageNotFound} />
          </div>
          <div className="about-film">
            
            <p><b>Actors:</b> {film !== null ? Actors : <></>}</p>
            <p><b>Director:</b> {film !== null ? Director : <></>}</p>
            <p><b>Writer:</b> {film !== null ? Writer : <></>}</p>
            <p><b>Country:</b> {film !== null ? Country : <></>}</p>
            <div className="card-panel teal">
            <span className="white-text">{film !== null ? Plot : <></>}</span>
          </div>
          </div>
          
        </div>
        
          
      </div>}
    </div>
  );
}

export default Modal;
