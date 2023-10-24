const Navbar = () => {
    return (
        <nav className="w-3/4 h-20 flex flex-row space-x-4 text-xl items-center">
            <div className="">Jeff</div>
            <div className="flex-grow"></div>
            <a href="#home" className="">Home</a>
            <a href="#about" className="">About</a>
            <a href="#projects" className="">Projects</a>
            <a href="#contacts" className="">Contacts</a>
        </nav>
    )
};

export default Navbar;