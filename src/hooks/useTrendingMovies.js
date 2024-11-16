import { useDispatch } from "react-redux"
import { API_OPTIONS, TRENDING_MOVIE_URL } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await fetch(TRENDING_MOVIE_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
      getTrendingMovies();
    }, []);
}

export default useTrendingMovies;