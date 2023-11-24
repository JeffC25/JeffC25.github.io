// import bg8 from '../assets/bg8.svg';

const Home = () => {
    return (
        <div id="home" className="h-screen snap-start flex flex-col justify-center items-left sm:items-center p-10 text-neutral-800 space-y-8">
            <h1 className="text-5xl">
                Hi, I'm <div className="bg-gradient-to-r from-cyan-500 to-lime-500 bg-clip-text text-transparent inline">Jeff</div>.
            </h1>
            <p className="text-4xl">
                I'm a software engineer.
            </p>
        </div>
    )
};

export default Home;