import { getFilm, getFilms, searchError, setIsLoading, setIsModalLoading } from "../redux/moviesReducer"

export const API = {
    async getFilms (dispatch) {
        dispatch(setIsLoading(true))
        fetch('http://www.omdbapi.com/?apikey=183830e5&s=matrix&plot=full')
        .then(data=>data.json())
        .then(data=>{
            if(data.Response === 'True'){
            dispatch(searchError(false))
            dispatch(getFilms(data.Search))
            dispatch(setIsLoading(false))
            } else {
                dispatch(searchError(true))
                console.log('error')
            }
            
        })
        
    },
    async search (dispatch, strSearch, type) {
        strSearch = strSearch.trim()
        dispatch(setIsLoading(true))
        fetch(`http://www.omdbapi.com/?apikey=183830e5&s=${strSearch}&type=${type}`)
        .then(data=>data.json())
        .then(data=>{
            if(data.Response === 'True'){
            dispatch(searchError(false))
            dispatch(getFilms(data.Search))
            dispatch(setIsLoading(false))
            console.log(data)
            } else {
                dispatch(searchError(true))
                console.log('error')
            }
        })
        .catch(err=>console.log(err))    
    },
    async thisFilmSearch (dispatch, film) {
        film = film.trim()
        dispatch(setIsModalLoading(true))
        fetch(`http://www.omdbapi.com/?apikey=183830e5&t=${film}`)
        .then(data=>data.json())
        .then(data=>{
            dispatch(getFilm(data))
            dispatch(setIsModalLoading(false))
        }) 
    }
}