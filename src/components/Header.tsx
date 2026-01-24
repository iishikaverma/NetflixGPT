import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { netflixLogo, userLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch} from "react-redux";
const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const user = useSelector((store: RootState) => store.user);

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
    return(
        <div className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
            <img
                className="w-24 sm:w-36 cursor-pointer py-1"
                src={netflixLogo}
                alt="Netflix logo"
            />
            <div className="flex p-2">
                <img
                    className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
                    alt="userIcon"
                    src={userLogo}
                />
                <button  onClick={handleSignOut} className="text-white font-bold hover:underline">
                    (Sign Out)
                </button>
            </div>
        </div>
    )
}

export default Header;