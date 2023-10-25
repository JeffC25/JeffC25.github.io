const Navbar = () => {
    return (
        <nav className="w-3/4 h-20 flex flex-row text-xl text-neutral-800 items-center justify-between">
            <div className="hidden sm:block ">Jeff Chen</div>
            <div className="flex-grow-0 sm:flex-grow"></div>
            <a href="#home" className="px-2 hover:text-lime-500 hover:animate-pulse">Home</a>
            <a href="#about" className="px-2 hover:text-lime-500 hover:animate-pulse">About</a>
            <a href="#projects" className="px-2 hover:text-lime-500 hover:animate-pulse">Projects</a>
            <a href="#contacts" className="px-2 hover:text-lime-500 hover:animate-pulse">Contacts</a>
        </nav>
    )
};

export default Navbar;