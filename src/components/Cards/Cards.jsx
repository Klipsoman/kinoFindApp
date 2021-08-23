import React from 'react'
import { useSelector } from "react-redux";
import Card from './Card/Card'

function Cards () {
    let movies = useSelector((state)=>state.movies.movies)
  
    return (
        <div className="cards-container">
        { movies ? movies.map(movie=>{
            return <Card movie={movie} key={movie.Poster}/>
        }) : <></>}   
      </div>
    )     
    
}

export default Cards