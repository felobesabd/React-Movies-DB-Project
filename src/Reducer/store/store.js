import { createStore, applyMiddleware } from 'redux'
import { allMovies } from '../redux/AllMoviesReduce'
import  thunk from 'redux-thunk'

export const store = createStore(allMovies, applyMiddleware(thunk))