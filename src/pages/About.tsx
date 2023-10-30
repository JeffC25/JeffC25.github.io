// import bg10 from "../assets/bg10.svg";

const About = () => {
    return (
        <div id="about" className="relative h-full snap-start flex flex-col sm:flex-row justify-center items-center text-neutral-800 bg-gradient-to-r from-lime-500 from-10% via-lime-400 via-30% to-neutral-200">
            {/* <img src={bg10} className="absolute top-0 object-cover h-full w-full -z-50" /> */}
            <div className="w-5/6 h-full flex flex-row items-center space-x-10">
                <section className="h-3/4 w-full flex-grow rounded-xl shadow-xl bg-neutral-200/50 backdrop-blur-md p-8">
                <h1 className="text-center text-lg text-neutral-800">
                        Education
                    </h1>
                </section>

                <section className="h-3/4 w-full flex-grow rounded-xl shadow-xl bg-neutral-200/50 backdrop-blur-md p-8">
                <h1 className="text-center text-lg text-neutral-800">
                        Skills
                    </h1>
                </section>

                <section className="h-3/4 w-full flex-grow rounded-xl shadow-xl bg-neutral-200/50 backdrop-blur-md p-8">
                    <h1 className="text-center text-lg text-neutral-800">
                        Work Experience
                    </h1>

                </section>
            </div>
        </div>
    )
};

export default About;