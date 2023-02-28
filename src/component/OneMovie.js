import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axois from 'axios'

const OneMovie = () => {
    const [movValueId, setmovValueId] = useState([])
    const params = useParams()
    
        // Function Set One Movie Data From API
        const movieAlone= async () => {
            const res = await axois.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=230fed787589329873ff16441e1cc9fb&language=en-US`)
            setmovValueId(res.data)
        }

        useEffect(() => {
            movieAlone()
        },)
        

return (
    <div>
    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center ">
                <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500/`+ movValueId.poster_path}
                    alt="Poster-Film"
                />
                <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom">
                        name:- {movValueId.original_title}
                    </p>
                    <p className="card-text-details border-bottom">
                        Data:- {movValueId.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                        <p>vote_count:- {movValueId.vote_count}</p>
                    </p>
                    <p className="card-text-details border-bottom">
                        vote_average:- {movValueId.vote_average}
                    </p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">Story:</p>
                </div>
                <div className="px-2">
                    <p className="card-text-story">{movValueId.overview}</p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    عوده للرئيسيه
                </button>
            </Link>
            <a href=''>
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
                    مشاهده الفيلم
                </button>
            </a>
        </Col>
    </Row>
</div>
)
}

export default OneMovie;