const Navbar = () => {
    return (
        <nav className="w-3/4 h-20 flex flex-row space-x-4 text-xl text-neutral-800 items-center">
            <div className="">Under Construction !</div>
            <div className="flex-grow"></div>
            <a href="#home" className="hover:text-lime-500 hover:animate-pulse">Home</a>
            <a href="#about" className="hover:text-lime-500 hover:animate-pulse">About</a>
            <a href="#projects" className="hover:text-lime-500 hover:animate-pulse">Projects</a>
            <a href="#contacts" className="hover:text-lime-500 hover:animate-pulse">Contacts</a>
        </nav>
    )
};

export default Navbar;