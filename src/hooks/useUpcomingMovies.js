import { useDispatch } from "react-redux"
import { API_OPTIONS, UPCOMING_MOVIE_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIE_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;