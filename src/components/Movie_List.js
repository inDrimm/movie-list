import axios from "axios";

export default async function getMovieList() {
    const APIKEY = process.env.REACT_APP_API_KEY;
    const movie = await axios.get(`${process.env.REACT_APP_API_MOVIE}/discover/movie?&&api_key=${APIKEY}`);
    return movie.data.results;
}