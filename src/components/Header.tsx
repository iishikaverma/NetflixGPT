const Header = () => {
    return(
        <div className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-4 sm:px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
            <img
            className="w-24 sm:w-36 cursor-pointer py-1"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix logo"
            />
        </div>
    )
}

export default Header;