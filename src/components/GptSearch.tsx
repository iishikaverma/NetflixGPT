import { bgImage } from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img
                    src={bgImage}
                    alt="Background"
                    className="w-screen h-screen object-cover"
                />
            </div>
        </div>
    );
};
export default GptSearch;