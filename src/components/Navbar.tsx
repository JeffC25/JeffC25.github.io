import scrollTo from "../utils/Scrolling";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-16 flex flex-row text-lg items-center justify-center z-50 px-20 lg:px-52  backdrop-blur-xl shadow-md">
            <button onClick={() => scrollTo('home')} className="hidden md:block ">Jeff Chen</button>
            <div className="flex-grow-0 md:flex-grow"></div>
            <button onClick={() => scrollTo('home')} className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Home</button>
            <button onClick={() => scrollTo('about')} className="text-center px-2 hover:text-lime-500 hover:animate-pulse">About</button>
            <button onClick={() => scrollTo('projects')} className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Projects</button>
            <button onClick={() => scrollTo('contacts')} className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Contacts</button>
        </nav>
    )
};

export default Navbar;