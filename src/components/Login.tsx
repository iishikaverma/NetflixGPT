import Header from "./Header";

const Login = () => {
    return(
        <div className="relative h-screen w-full">
            <Header/>
            <div>
                <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/IN-en-20260105-TRIFECTA-perspective_5ec818ea-11f4-4bff-a409-8f36e9f9a1e2_medium.jpg"
                    alt = "Background"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="w-[90%] sm:w-[380px] mt-5 bg-black/75 p-10 rounded-lg">
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Sign In
                    </h1>
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            className="h-12 rounded bg-zinc-800 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        
                        <input 
                            type="text" 
                            placeholder="Password" 
                            className="h-12 rounded bg-zinc-800 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                        />
                        
                        <button 
                            type="submit" 
                            className="mt-4 h-12 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                        >
                            Sign In
                        </button>
                        
                        <p className="flex justify-center text-sm text-gray-400">OR</p>

                        <button
                            type="button"
                            className="h-12 rounded bg-[#333] text-white hover:bg-[#444] transition"
                        >
                            Use a sign-in code
                        </button>
                        <div>
                            <div className="text-sm text-gray-400">
                                <span className="cursor-pointer hover:underline">
                                    Forgot password?
                                </span>
                            </div>

                            <p className="mt-4 text-sm text-gray-400">
                                New to Netflix?{" "}
                                <span className="cursor-pointer text-white hover:underline">
                                    Sign up now
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