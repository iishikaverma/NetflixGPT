import { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
    const movies = useSelector((state: RootState) => state.movies?.nowPlayingMovies);

    if (!movies) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            {/* className="relative -mt-28" */}
            <VideoTitle title ={original_title} overview={overview} />
            <VideoBackground movieId={id}/> 
        </div>
    )
}

export default MainContainer