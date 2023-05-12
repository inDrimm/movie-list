import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;
export default async function getMovieList() {
    const movie = await axios.get(`${process.env.REACT_APP_API_MOVIE}/discover/movie?api_key=${APIKEY}`);
    return movie.data.results;
}

export async function searchMovies(q) {
    const search = await axios.get(`${process.env.REACT_APP_API_MOVIE}/search/movie?query=${q}&page=1&api_key=${APIKEY}`);
    return search.data.results;
}