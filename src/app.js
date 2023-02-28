import { Container } from "react-bootstrap";
import React, { useState } from "react";
import ComNavPon from './component/ComNavPon';
import MoviesRunCards from './component/MoviesRunCards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OneMovie from "./component/OneMovie";
import axois from 'axios'

let App = () => {
    // const [pagesNumbers, setPagesNumbers] = useState(0);

    //     // Function Set All Page Of Data From API
    //     const allPages= async (numPage) => {
    //         const res = await axois.get(`https://api.themoviedb.org/3/movie/popular?api_key=230fed787589329873ff16441e1cc9fb&language=en-US&page=${numPage}`)
    //         // setMovies(res.data.results)
    //         setPagesNumbers(res.data.total_pages);
    //     }

    return (
        <div className="color-body font">
        <ComNavPon />
        <Container>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MoviesRunCards />} />
        <Route path="/movie/:id" element={<OneMovie />} />
        </Routes>
        </BrowserRouter>
        </Container>
        </div>
    )
}
export default App;