import { bgImage } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed  -z-10">

                <img className="object-cover min-h-screen" 
                                src={bgImage} alt="bg-img"
                />

            </div >

            <div>

                <GptSearchBar/>
                <GptMovieSuggestions/>

            </div>
        </div>
    );
};
export default GptSearch;