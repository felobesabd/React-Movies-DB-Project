import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MoviesCard from './MoviesCard';
import PaginationReact from './PaginationReact';
import { actionsMov } from '../Reducer/Actions/action.js';

const MoviesRunCards = () => {
  const [movies, setMovies] = useState([])

    const dataState = useSelector((state)=> state.movie) 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionsMov())
  },[])

  useEffect(() => {
    setMovies(dataState)
  }, [dataState])

  return (
    <Row className='mt-3'>
    {
        movies.length >= 1 ? (movies.map((movie)=> {
            return(<MoviesCard key={movie.id} movie={movie}/>)
        })) 
        : (<h1 className='text-center p-5'>لا يوجد افلام</h1>)
    }
    {
      movies.length >= 1 ? (<PaginationReact />) : null
    }
    
    </Row>
  )
}

export default MoviesRunCards;