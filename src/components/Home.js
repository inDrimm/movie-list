import { Col, Container, Row, CardGroup, Card } from "react-bootstrap";
import getMovieList from "./Movie_List";
import { useEffect, useState } from "react";

export default function Home() {
    const [movie, setMovieList] = useState([]);
    useEffect(() => {
        getMovieList().then((res) => { setMovieList(res); });
    }, []);
    // console.log({ datas: movie });

    return (
        <div className="myBg">
            <Container className="home">
                <Row>
                    <div className="position-search">
                        <Col>
                            <h1>Cari Disini</h1>
                            <input type="text" placeholder="Search" className="search" />
                        </Col>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="content">
                        <CardGroup>
                            {movie.map((res, index) => {
                                return (
                                    <Col xl={3}>
                                        <Card Card key={index} className="m-1" >
                                            <div className="cardColor">
                                                <Card.Title className="cardTitle">{res.title}</Card.Title>
                                                <Card.Img variant="top" src={`${process.env.REACT_APP_IMG_URL}/${res.poster_path}`} className="imgMovies" />
                                                <Card.Body>

                                                    <Card.Text className="cardOverview">
                                                        {res.overview}
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>
                                            <Card.Footer>
                                                <small className="txt-footer">{res.vote_average}</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </CardGroup>
                    </div>
                </Row >
            </Container >
        </div >
    );
};