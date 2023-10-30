const About = () => {
    return (
        <div id="about" className="relative h-full snap-start flex flex-col sm:flex-row justify-center items-center text-neutral-800">
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