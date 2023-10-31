import { useState } from "react";

const About = () => {
    const [tab, setTab] = useState(0);

    return (
        <div id="about" className="relative h-full snap-start flex flex-col sm:flex-row justify-center items-center">
            <section className="h-2/3 w-3/4 md:w-1/2 rounded-xl flex flex-col ">
                <nav className="w-2/3 md:w-1/3 flex flex-row rounded-xl bg-neutral-200/50 backdrop-blur-md shadow-md bg-gradient-to-r from-cyan-500 to-lime-300">
                    <button onClick={() => setTab(0)} className={`w-full hover:bg-transparent rounded-l-lg py-4 ${(tab == 0 ? "bg-transparent" : "bg-neutral-200")}`}>About</button>
                    {/* <button onClick={() => setTab(1)} className={`w-full hover:bg-transparent py-4 ${(tab == 1 ? "bg-transparent" : "bg-neutral-200")}`}>Experience</button> */}
                    <button onClick={() => setTab(2)} className={`w-full hover:bg-transparent rounded-r-lg py-4 ${(tab == 2 ? "bg-transparent" : "bg-neutral-200")}`}>Skills</button>
                </nav>
                
                {/* ABOUT */}
                <section className={`pt-20 h-fill flex flex-col-reverse md:flex-row flex-grow p-2 ${(tab == 0 ? "block" : "hidden")}`}>
                    <p className="text-xl w-3/4 pr-10">
                        My name is Jeffrey Chen, and I'm a 4th year student studying Computer Engineering at Boston University.
                        I'm passionate about web development, scalable architectures, and open-source software. 
                        When I'm not developing, I enjoy cooking, drawing, and playing the guitar.
                    </p>
                    <div className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 flex-grow aspect-square ">
                        <div className="relative">
                            <img 
                                src="https://media.licdn.com/dms/image/C5603AQHmD3d2p0CvPg/profile-displayphoto-shrink_800_800/0/1655080206114?e=1703721600&v=beta&t=xNy3DQr2macGwFxH3VdJ3tdPVCimWHukv67CfK6PO44" 
                                className="aspect-square object-cover rounded-lg bottom-2 right-2 absolute shadow-sm"
                            />
                            <div className="aspect-square w-full rounded-lg bg-gradient-to-r from-lime-300 via-cyan-400 to-blue-500"></div>
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                {/* <section className={`pt-20 ${(tab == 1 ? "block" : "hidden")}`}>
                    <p className="text-lg">

                    </p>
                </section> */}

                {/* SKILLS */}
                <section className={`w-full pt-20 flex text-center space-x-2 ${(tab == 2 ? "block" : "hidden")}`}>

                    <div className="flex-grow ">
                        <h1 className="text-2xl text-lime-500 mb-2">
                            Languages
                        </h1>
                        <ul className="text-3xl space-y-2">
                            <li>Go</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="flex-grow  ">
                        <h1 className="text-2xl text-green-500 mb-2">
                            Frameworks
                        </h1>
                        <ul className="text-3xl space-y-2">
                            <li>React</li>
                            <li>Svelte</li>
                            <li>Express.js</li>
                            <li>Flask</li>
                            <li>Django</li>
                            <li>ASP.NET</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="flex-grow  ">
                        <h1 className="text-2xl text-cyan-500 mb-2">
                            Databases
                        </h1>
                        <ul className="text-3xl space-y-2">
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Neo4j</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="flex-grow  ">
                        <h1 className="text-2xl text-blue-500 mb-2">
                            Tools
                        </h1>
                        <ul className="text-3xl space-y-2">
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>NGINX</li>
                            <li>AWS</li>

                        </ul>
                    </div>

                </section>

            </section>
        </div>
    )
};

export default About;