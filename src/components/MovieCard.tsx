import { IMG_CDN } from "../utils/constants"
import { MovieCardProps } from "../utils/types"


const MovieCard = ({posterPath}:MovieCardProps) => {
    if (!posterPath) return null;
    return (
        <div className="w-44 flex-shrink-0 overflow-hidden">
            <img 
            className="rounded-md hover:scale-110 transition-transform duration-300 ease-out"
            alt="Movie Card" src={IMG_CDN + posterPath}/>
        </div>
    )
}

export default MovieCard