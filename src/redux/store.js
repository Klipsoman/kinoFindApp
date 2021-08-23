import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { moviesReducer } from './moviesReducer'

const RootReducer = combineReducers({
    movies: moviesReducer,
})

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))