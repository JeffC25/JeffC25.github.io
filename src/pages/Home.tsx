// import bg8 from '../assets/bg8.svg';

const Home = () => {
    return (
        <div id="home" className="relative h-full min-h-screen snap-start flex flex-col sm:flex-row justify-center items-center text-neutral-800">
            <div className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-20">
                <div className="text-center">
                    <h1 className="text-5xl">
                        Hi, I'm Jeff.
                    </h1>
                    <br />
                    <p className="h-1/2 text-4xl">
                        This site's under construction.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Home;