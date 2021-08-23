const GET_FILMS = "GET_FILMS"
const GET_FILM = "GET_FILM"
const FILM_OR_SERIES = "FILM_OR_SERIES"
const SEARCH = "SEARCH"
const IS_LOADING = "IS_LOADING"
const IS_MODAL_SHOW = "IS_MODAL_SHOW"
const IS_MODAL_LOADING = "IS_MODAL_LOADING"
const SEARCH_ERROR = "SEARCH_ERROR"

const initialState = {
  movies: null,
  movie: null,
  search: '',
  filmOrSeries: '',
  isLoading: false,
  isModalShow: false,
  isModalLoading: false,
  searchError: false,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        movies: action.payload,
      }
    case GET_FILM:
      return {
        ...state,
        movie: action.payload,
      };
    case FILM_OR_SERIES:
        return {
            ...state,
            filmOrSeries: action.payload
        }
    case SEARCH:
        return {
            ...state,
            search: action.payload
        }
    case IS_LOADING:
        return {
            ...state,
            isLoading: action.payload
        }
    case IS_MODAL_LOADING:
        return {
            ...state,
            isModalLoading: action.payload
        }
    case IS_MODAL_SHOW:
        return {
            ...state,
            isModalShow: action.payload
        }
    case SEARCH_ERROR:
        return {
          ...state,
          searchError: action.payload
        }
    default:
      return state;
  }
};

export const getFilms = (payload) => ({type: GET_FILMS, payload})
export const getFilm = (payload) => ({type: GET_FILM, payload})
export const filmOrSeriesAction = (payload) => ({type: FILM_OR_SERIES, payload})
export const setSearch = (payload) => ({type: SEARCH, payload})
export const setIsLoading = (payload) => ({type: IS_LOADING, payload})
export const setIsModalLoading = (payload) => ({type: IS_MODAL_LOADING, payload})
export const setIsModal = (payload) => ({type: IS_MODAL_SHOW, payload})
export const searchError = (payload) => ({type: SEARCH_ERROR, payload})