import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { actionsMovPages } from '../Reducer/Actions/action.js';


const PaginationReact = () => {
    const [pagesNumbers, setPagesNumbers] = useState(0);

    const dataState = useSelector((state)=> state.pageCount) 
    const dispatch = useDispatch();

    useEffect(() => {
      setPagesNumbers(dataState);
    }, [])
  

    const handlePageClick = (data)=> {
      dispatch(actionsMovPages(data.selected + 1));
    }

  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pagesNumbers}
        previousLabel="< previous"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        activeLinkClassName={'active'}
    />
  )
}

export default PaginationReact;