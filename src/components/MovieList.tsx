import { MovieListProps } from "../utils/types"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <div className="px-4 md:px-8">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold py-3 text-white">
            {title}
        </h1>

        <div className="relative">
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth">
                {movies?.map((movie) => (
                    <div key={movie.id} className="flex-shrink-0">
                        <MovieCard
                            posterPath={movie.poster_path}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList;