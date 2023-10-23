const Navbar = () => {
    return (
        <nav className="w-full h-20 bg-transparent flex flex-row space-x-4 px-2 text-3xl items-center justify-between">
            <div className="">Logo</div>
            <div className="flex-grow"></div>
            <a href="#about" className="">Home</a>
            <a href="#home" className="">About</a>
            <a href="#projects" className="">Projects</a>
            <a href="#contacts" className="">Contacts</a>
        </nav>
    )
};

export default Navbar;