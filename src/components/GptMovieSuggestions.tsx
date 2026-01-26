import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

    const { movieResult, movieName } = useSelector(
        (store: any) => store.gpt
    );

    if (!movieName?.length || !movieResult?.length) return null;

    return (
        <div className="relative z-20 mx-4 mb-8 sm:mx-8 mt-6 rounded-xl bg-black/80 backdrop-blur-md">
            <div className="py-6 space-y-10">
                {movieName.map((name: string, index: number) => (

                    <MovieList

                        key={name}
                        title={name}
                        movies={movieResult[index]}
                        
                    />

                ))}
            </div>
        </div>
    );
}

export default GptMovieSuggestions