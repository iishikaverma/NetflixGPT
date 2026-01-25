import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store:any) => store.movies);
    return (
        <div className=" bg-black pb-8">
            <div className="relative z-20 -mt-16 px-4 space-y-8 text-white">
                <MovieList title = {"Now Playing "} movies = {movies.nowPlayingMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/> */}
            </div>
        </div>
    )
}

export default SecondaryContainer;