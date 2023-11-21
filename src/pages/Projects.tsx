import moviebrowser from '../assets/projects/moviebrowser/1.png';
import chatapp from '../assets/projects/chatapp/1.png';
import cookietective from '../assets/projects/cookietective/1.png';
import smartarticleanalyzer from '../assets/projects/smartarticleanalyzer/1.png';
import bucrossing from '../assets/projects/bucrossing/1.jpg';

const Projects = () => {
    return (
        <div id="projects" className=" w-full snap-start flex justify-center flex-col items-center space-y-10 py-44">
            <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-xl h-fit flex flex-col md:flex-row ">
                <a href="https://movie.yerf.dev" className="md:w-1/2 rounded-l-lg">
                    <img src={moviebrowser} alt="Project Thumbnail" className="rounded-l-lg"/>
                </a>
                <div className="md:w-1/2 p-2 bg-neutral-100 rounded-r-lg flex flex-col">
                    <div className="text-xl bg-clip flex flex-row space-x-1">
                        <h2 className="">Movie Browser</h2>
                        <div className="flex-grow"></div>
                        <a href="https://movie.yerf.dev" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">Demo</a>
                        <a href="https://github.com/jeffc25/movie-browser" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">GitHub</a>
                    </div>
                    <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>
                    <span className="text-lg">
                        A platform for browsing and discovering movies.
                    </span>
                    <div className="flex-grow"></div>
                    <ul className="flex flex-row flex-wrap">
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            React
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            TypeScript
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Tailwind
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Go
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Redis
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            NGINX
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Docker
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            AWS
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-xl h-fit flex flex-col md:flex-row ">
                <img src={chatapp} alt="Project Thumbnail" className="h-full md:w-1/2 rounded-l-lg"/>
                <div className="md:w-1/2 p-2 bg-neutral-100 rounded-r-lg flex flex-col">
                    <div className="text-xl bg-clip flex flex-row space-x-1">
                        <h2 className="">Chat App</h2>
                        <div className="flex-grow"></div>
                        
                        <a href="https://github.com/jeffc25/chat-app" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">GitHub</a>
                    </div>
                    <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>
                    <span className="text-lg">
                        A minimalist live chat application.
                    </span>
                    <div className="flex-grow"></div>
                    <ul className="flex flex-row flex-wrap">
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            React
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            JavaScript
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Tailwind
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Firebase
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-xl h-fit flex flex-col md:flex-row ">
                <img src={smartarticleanalyzer} alt="Project Thumbnail" className="h-full md:w-1/2 rounded-l-lg"/>
                <div className="md:w-1/2 p-2 bg-neutral-100 rounded-r-lg flex flex-col">
                    <div className="text-xl bg-clip flex flex-row space-x-1">
                        <h2 className="">Smart Article Analyzer</h2>
                        <div className="flex-grow"></div>
                        
                        <a href="https://github.com/jeffc25/smart-article-analyzer" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">GitHub</a>
                    </div>
                    <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>
                    <span className="text-lg">
                        A fullstack website to generate summaries, keywords, and sentiment level from news articles, PDF documents, and arbritrary text.
                    </span>
                    <div className="flex-grow"></div>
                    <ul className="flex flex-row flex-wrap">
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Python
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Flask
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Bootstrap
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-xl h-fit flex flex-col md:flex-row ">
                <img src={cookietective} alt="Project Thumbnail" className="h-full md:w-1/2 rounded-l-lg"/>
                <div className="md:w-1/2 p-2 bg-neutral-100 rounded-r-lg flex flex-col">
                    <div className="text-xl bg-clip flex flex-row space-x-1">
                        <h2 className="">Cookietective</h2>
                        <div className="flex-grow"></div>
                        
                        <a href="https://github.com/Cybersecurity-Project-Group/Cookietective" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">GitHub</a>
                    </div>
                    <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>
                    <span className="text-lg">
                        An investigation of cookie leakage vulnerabilities due to CNAME cloaking.
                    </span>
                    <div className="flex-grow"></div>
                    <ul className="flex flex-row flex-wrap">
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Python
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Selenium
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            SQLite
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Mitmproxy
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Docker
                        </li>
                    </ul>
                </div>
            </section>
            <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-xl h-fit flex flex-col md:flex-row ">
                <img src={bucrossing} alt="Project Thumbnail" className="h-full md:w-1/2 rounded-l-lg"/>
                <div className="md:w-1/2 p-2 bg-neutral-100 rounded-r-lg flex flex-col">
                    <div className="text-xl bg-clip flex flex-row space-x-1">
                        <h2 className="">BU Crossing</h2>
                        <div className="flex-grow"></div>
                        
                        <a href="https://github.com/JeffC25/BU-Crossing" className="border px-1 border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md">GitHub</a>
                    </div>
                    <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>
                    <span className="text-lg">
                        A Crossy Road-style game with custom Boston University-themed models.
                    </span>
                    <div className="flex-grow"></div>
                    <ul className="flex flex-row flex-wrap">
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            C#
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            Unity
                        </li>
                        <li className=" border-cyan-500 border rounded-md p-1 mr-1 mb-1">
                            MagicaVoxel
                        </li>
                    </ul>
                </div>
            </section>
        </div>  
    )
};

export default Projects;
