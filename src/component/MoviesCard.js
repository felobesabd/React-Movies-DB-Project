import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

const MoviesCard = ({movie}) => {
  return (
    <Col xs='12' sm='6' md='6' lg='3'  className='my-1'>
    <Link to={`/movie/${movie.id}`}>
    <div className='card'>
    <img src={`https://image.tmdb.org/t/p/w500/`+ movie.poster_path} aria-hidden alt='Image-movie' />
    <div className='over-lay'>
    <div className='card-info fs-6'>
    <p>name:- {movie.original_title}</p>
    <p>Data:- {movie.release_date}</p>
    <p>vote_average:- {movie.vote_average}</p>
    <p>vote_count:- {movie.vote_count}</p>
    </div>
    </div>
    </div>
    </Link>
    </Col>
  )
}

export default MoviesCard;