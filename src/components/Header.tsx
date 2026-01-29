import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { netflixLogo, SUPPORTED_LANGUAGES, userLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../utils/appStore";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    const showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch)

    const handleSignOut =() =>{
        signOut(auth).then(() => {
            
        })
        .catch((error) => {
            navigate("/error");
        });
    }
    useEffect(() => { 
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
    
        if (user) {
            const{ uid,email,displayName,photoURL} = user;
            dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL: photoURL,
                }))
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/"); 
            }
        });
        return () => unsubscribe();
    },[]);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e: any) => {
        dispatch(changeLanguage(e.target.value));
    };

    return(
        <div className="fixed z-50 w-full bg-gradient-to-b from-black to-transparent">
            <div className="flex flex-col sm:flex-row sm:items-center px-4 sm:px-6 py-2 gap-2">
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                    <img
                        className="w-36 sm:w-40 cursor-pointer"
                        src={netflixLogo}
                        alt="Netflix logo"
                    />
                </div>
                {user && (
                    
                    <div className="w-full sm:w-auto flex justify-center sm:ml-auto">
                        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-6">

                            {showGptSearch && (
                                    <select
                                        className="bg-black cursor-pointer text-white text-xs sm:text-sm px-2 py-1 rounded border border-white"
                                        onChange={handleLanguageChange}
                                    >
                                    {SUPPORTED_LANGUAGES.map((lang) => (
                                        <option
                                            className="bg-slate-900 text-sm"
                                            key={lang.identifier}
                                            value={lang.identifier}
                                        >
                                            {lang.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                            
                            <button className="py-1 sm:py-2 px-3 sm:px-4 text-xs sm:text-base bg-purple-800 text-white rounded-lg"
                                onClick={handleGptSearchClick}>
                                {showGptSearch? "Homepage" : "GPT Search"}
                            </button>
                        
                            <img
                                className="w-8 h-8 rounded cursor-pointer sm:w-10 sm:h-10"
                                alt="userIcon"
                                src={userLogo}
                            />
                            <button  onClick={handleSignOut} className="py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-base rounded bg-red-600 text-white">
                                Sign Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;