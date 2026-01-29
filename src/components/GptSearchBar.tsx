import { useRef } from "react";
import lang from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
// import { getGeminiResponse } from "../utils/geminiAI";
import { getGroqResponse } from "../utils/groqAI";

const GptSearchBar = () => {
    const langKey = useSelector((store: RootState) => store.config.lang);
    const searchText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie: string) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    const handleGptSearchClick = async () => {
    const userValue = searchText.current?.value?.trim();

    if (!userValue) return;

    const gptQuery =
        "Act as a movie recommendation engine and recommend only 5 movies based on the user's query: " +
        userValue +
        ". Respond ONLY with movie titles separated by commas. Do not add numbering or explanations. Only give 5 titles.";

        const data = await getGroqResponse(gptQuery);

        const gptMovies = data
        ?.split(",")
        .map((movie) => movie.trim()).slice(0, 5) ?? [];

        const promiseArray = gptMovies.map((movie) =>
            searchMovieTMDB(movie)
        );

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(
            addGptMovieResult({
                movieName: gptMovies,
                movieResult: tmdbResults,
            })
        )
    };

    return(
        <div className="flex justify-center pt-28 sm:pt-32 px-3 sm:px-4">
            <form className="w-full max-w-3xl bg-black/80 rounded-lg p-3 mt-4 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            onSubmit ={(e) => e.preventDefault()}>

                <input type="text"
                    ref={searchText}
                    placeholder={lang[langKey as keyof typeof lang].gptSearchPlaceholder}
                    className="flex-1 h-12 px-4 py-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                    onClick={handleGptSearchClick}
                    className="h-12 px-6 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition sm:w-auto w-full">
                    {lang[langKey as keyof typeof lang].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar;