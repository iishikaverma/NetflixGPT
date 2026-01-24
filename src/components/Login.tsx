import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { bgImage, userLogo } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const email = useRef<HTMLInputElement> (null);
    const password = useRef<HTMLInputElement> (null);
    const name = useRef<HTMLInputElement | null> (null);
    const dispatch = useDispatch();

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // Validate the form data
        if (!email.current || !password.current) return;

        const message = checkValidData (email.current.value,password.current.value);

        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm){
            //Sign Up Logic 
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )

            .then((userCredential) => {
    
                const user = userCredential.user;
            
                updateProfile(user, {
                    displayName:  name.current ? name.current.value : "User",
                    photoURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s"
                })
                .then(() => {
                // Profile updated!
                const { uid, email, displayName} = auth.currentUser!;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: userLogo
                    }),
                );
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
            })
            } else {
                signInWithEmailAndPassword(
                    auth,
                    email.current.value,
                    password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
    }

    return(
        <div className="relative h-screen w-full">
            <Header/>
            <div>
                <img src = {bgImage}
                    alt = "Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="w-[90%] sm:w-[380px] mt-5 bg-black/75 p-10 rounded-lg">
                    <h1 className="text-3xl font-bold text-white mb-6">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    <form className="flex flex-col gap-4"
                        onSubmit={(e) => e.preventDefault()}>

                        {!isSignInForm && (<input 
                            ref={name}
                            type="text" 
                            placeholder="Name" 
                            className="h-12 rounded bg-zinc-800 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />)}

                        <input 
                            ref={email}
                            type="email" 
                            placeholder="Email Address" 
                            className="h-12 rounded bg-zinc-800 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        
                        <input 
                            ref={password}
                            type="password" 
                            placeholder="Password" 
                            className="h-12 rounded bg-zinc-800 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />

                        {errorMessage && (
                            <p className="text-red-600 font-bold text-sm ">{errorMessage}</p>
                        )}

                        <button 
                            type="submit" 
                            className="mt-4 h-12 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                            onClick={handleButtonClick}
                        >
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                        
                        {isSignInForm && (<div>
                            <p className="flex justify-center text-sm text-gray-400">OR</p>

                            <button
                                type="button"
                                className="w-full mt-3 h-12 flex items-center justify-center rounded bg-[#333] text-white hover:bg-[#444] transition"
                            >
                                Use a sign-in code
                            </button>
                        </div>)}
                        <div>
                            <div className="text-sm text-gray-400">
                                <span className="cursor-pointer hover:underline">
                                    Forgot password?
                                </span>
                            </div>

                            <p className="mt-5 text-sm text-gray-400 hover:underline cursor-pointer">
                                {isSignInForm ? "New to Netflix? " : "Already a member? "}
                                <span
                                className="cursor-pointer text-white hover:underline"
                                onClick={toggleSignInForm}
                                >
                                    {isSignInForm ? "Sign up now" : "Sign in now"}
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;