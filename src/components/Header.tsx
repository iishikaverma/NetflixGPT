import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { netflixLogo, userLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../utils/appStore";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

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

    return(
        <div className="fixed z-50 w-full bg-gradient-to-b from-black to-transparent">
            <div className="flex items-center px-6 py-2">
            <img
                className="w-36 cursor-pointer"
                src={netflixLogo}
                alt="Netflix logo"
            />
            (user && {
                <div className="ml-auto flex items-center gap-6">
                    <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition"
                        onClick={handleGptSearchClick}>
                        GPT Search
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                        <img
                            className="w-10 h-10 rounded cursor-pointer"
                            alt="userIcon"
                            src={userLogo}
                        />
                        <button  onClick={handleSignOut} className="py-2 px-4 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                            Sign Out
                        </button>
                    </div>
                </div>
            })
            </div>
        </div>
    )
}

export default Header;