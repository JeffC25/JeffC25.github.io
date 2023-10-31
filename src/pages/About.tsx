import { useState } from "react";

const About = () => {
    const [tab, setTab] = useState(0);

    return (
        <div id="about" className="relative h-full snap-start flex flex-col sm:flex-row justify-center items-center text-neutral-800 pt-20">
            <section className="h-2/3 w-1/2 rounded-xl flex flex-col ">
                <nav className="w-1/3 flex flex-row rounded-xl bg-neutral-200/50 backdrop-blur-md shadow-md">
                    <button onClick={() => setTab(0)}className={`w-1/3 hover:bg-lime-400/75 hover:text-white rounded-l-lg py-4 ${(tab == 0 ? "border-lime-400/75 border-2" : "")}`}>About</button>
                    <button onClick={() => setTab(1)}className={`w-1/3 hover:bg-lime-400/75 hover:text-white py-4 ${(tab == 1 ? "border-lime-400/75 border-2" : "")}`}>Experience</button>
                    <button onClick={() => setTab(2)}className={`w-1/3 hover:bg-lime-400/75 hover:text-white rounded-r-lg py-4 ${(tab == 2 ? "border-lime-400/75 border-2" : "")}`}>Skills</button>
                </nav>
                
                <section className={`pt-20 h-fill flex flex-row flex-grow rounded-tr-lg rounded-br-lg rounded-bl-lg p-2 ${(tab == 0 ? "block" : "hidden")}`}>
                    <p className="text-lg">
                        My name is Jeffrey Chen, and I'm a 4th year student studying Computer Engineering at Boston University.
                        I am passionate about web development, scalable architectures, and open source software.
                    </p>
                    <div className="h-full w-full relative">
                        <div className="border-lime-500/75 border-4 aspect-square w-full left-4 top-4 rounded-lg absolute"></div>
                        <img 
                            src="https://media.licdn.com/dms/image/C5603AQHmD3d2p0CvPg/profile-displayphoto-shrink_800_800/0/1655080206114?e=1703721600&v=beta&t=xNy3DQr2macGwFxH3VdJ3tdPVCimWHukv67CfK6PO44" 
                            className="aspect-square object-cover rounded-lg absolute shadow-sm"
                        />
                        
                    </div>
                </section>

                <section className={`pt-20 ${(tab == 1 ? "block" : "hidden")}`}>
                    <p className="text-lg">

                    </p>
                </section>

                <section className={`pt-20 flex text-left ${(tab == 2 ? "block" : "hidden")}`}>
                    <div className="w-1/4 bg-neutral-200/50 shadow-md rounded-lg p-4">
                        <h1 className="text-2xl text-lime-500 mb-2">
                            Languages
                        </h1>
                        <ul className="text-lg">
                            <li>Go</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="w-1/4 bg-neutral-200/50 shadow-md rounded-lg p-4">
                        <h1 className="text-2xl text-lime-500 mb-2">
                            Frameworks
                        </h1>
                        <ul className="text-lg">
                            <li>React</li>
                            <li>Svelte</li>
                            <li>Remix</li>
                            <li>Express.js</li>
                            <li>Flask</li>
                            <li>Django</li>
                            <li>ASP.NET</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="w-1/4 bg-neutral-200/50 shadow-md rounded-lg p-4">
                        <h1 className="text-2xl text-lime-500 mb-2">
                            Databases
                        </h1>
                        <ul className="text-lg">
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>Neo4j</li>
                        </ul>
                    </div>
                    {/* <div className="bg-lime-500 w-px h-full"></div> */}
                    <div className="w-1/4 bg-neutral-200/50 shadow-md rounded-lg p-4">
                        <h1 className="text-2xl text-lime-500 mb-2">
                            Tools
                        </h1>
                        <ul className="text-lg">
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>NGINX</li>
                            <li>AWS (EC2, Lamda, S3, Elasticache)</li>
                            <li>Figma</li>
                            <li>MATLAB</li>
                        </ul>
                    </div>

                </section>

            </section>
        </div>
    )
};

export default About;