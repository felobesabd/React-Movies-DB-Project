import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../images/logo.png'
import { useDispatch } from 'react-redux';
import { actionsMov, actionsMovSearch } from '../Reducer/Actions/action.js';

const ComNavPon = () => {
  const clickSearch = (val) => {
    search(val)
  }

  const dispatch = useDispatch();

      // Function Set Data Search From API 
      const search= async (word) => {
        if (word === '') {
            dispatch(actionsMov())
        }else {
          dispatch(actionsMovSearch(word))
        }
    }

    return (
      <div className='nav-style w-100'>
        <Container>
        <Row className='justify-content-between'>
        <Col xs='2' lg='1'>
        <a href='/'>
        <img src={logo} className='logo' alt='Logo'/>
        </a>
        </Col>
        <Col xs='8' lg='11' className='d-flex align-items-center'>
        <div className='position-relative w-100'>
        <i className="fa fa-search search-i" aria-hidden="true"></i>
        <input 
        type='text' 
        placeholder='Search' 
        className='input w-100'
        onChange={(e)=> clickSearch(e.target.value)} />
        </div>
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default ComNavPon;