import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

    const { movieResults, movieNames } = useSelector(
        (store: any) => store.gpt
    );

    if (!movieNames || !movieResults) return null;

    return (
        <div className="p-3 sm:p-6 m-2 bg-black/80 text-white bg-opacity-70 rounded-lg">
            <div>
                {movieNames.map((movieName: string, index: number) => (

                    <MovieList

                        key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                        
                    />

                ))}
            </div>
        </div>
    );
}

export default GptMovieSuggestions