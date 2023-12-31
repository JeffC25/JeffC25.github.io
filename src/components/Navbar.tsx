const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-16 flex flex-row text-lg items-center justify-center z-50 px-20 lg:px-52  backdrop-blur-xl shadow-md">
            <a href="#home" className="hidden md:block ">Jeff Chen</a>
            <div className="flex-grow-0 md:flex-grow"></div>
            <a href="#home" className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Home</a>
            <a href="#about" className="text-center px-2 hover:text-lime-500 hover:animate-pulse">About</a>
            <a href="#projects" className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Projects</a>
            <a href="#contacts" className="text-center px-2 hover:text-lime-500 hover:animate-pulse">Contacts</a>
        </nav>
    )
};

export default Navbar;