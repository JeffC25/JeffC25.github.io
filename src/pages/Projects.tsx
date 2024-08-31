import Project from '../components/Project';
import moviebrowser from '../assets/projects/moviebrowser/1.png';
import chatapp from '../assets/projects/chatapp/1.png';
import cookietective from '../assets/projects/cookietective/1.png';
import smartarticleanalyzer from '../assets/projects/smartarticleanalyzer/1.png';
import tldrover from '../assets/projects/smartarticleanalyzer/2.png';
import bucrossing from '../assets/projects/bucrossing/1.jpg';
import seniordesign from '../assets/projects/seniordesign/1.png';
import virtualfilesystem from '../assets/projects/virtualfilesystem/1.png';
import portfolio from '../assets/projects/portfolio/1.png';
import wip from '../assets/wip.png'

const Projects = () => {
    return (
        <div id="projects" className="w-full snap-start flex justify-center flex-col items-center space-y-10 py-24">
            <h1 className="text-xl">Projects</h1>
            <Project
                title="Ascii-Art"
                description="A CLI tool and Go library for converting images to ASCII Art with edge detection"
                website="#"
                image={wip}
                alt="Project Thumbnail"
                technologies={["Go"]}
                links={[{ title: "In Progress", url: "#" }]}
            />
            <Project
                title="GitQuill"
                description="A personal blog template that posts via Git commits"
                website="#"
                image={wip}
                alt="Project Thumbnail"
                technologies={["Go", "HTMX"]}
                links={[{ title: "In Progress", url: "#" }]}
            />
            <Project
                title="FridgeBuddy - Smart Fridge Tracker"
                description="An economical touchscreen attachment for grocery management with automated receipt scanning, recipe suggestions, expiration date alerts, and mobile device syncing."
                website="#"
                image={seniordesign}
                alt="Project Thumbnail"
                technologies={["React", "React Native", "TypeScript", "Python", "DynamoDB"]}
                links={[{ title: "Github", url: "https://github.com/EC463-Smart-Fridge" }]}
            />
            <Project
                title="Movie Browser"
                description="A fullstack website for browsing and discovering movies content, including overviews, reviews, cast, and trailers, as well as currated lists for trending, currently playing, upcoming, and top-rated films."
                website="https://movie.yerf.dev"
                image={moviebrowser}
                alt="Project Thumbnail"
                technologies={["React", "TypeScript", "Tailwind", "Go", "Redis", "PostgreSQL", "NGINX"]}
                links={[{ title: "Demo", url: "https://movie.yerf.dev" }, { title: "GitHub", url: "https://github.com/jeffc25/movie-browser" }]}
            />
            <Project
                title="TLDRover - Smart Article Analyzer"
                // description="A rewrite of the Smart Article Analyzer"
                description="An application to generate summaries, keywords, and sentiment from articles, PDF documents, and arbritrary text."
                website="https://github.com/jeffc25/smart-article-analyzer"
                image={tldrover}
                alt="Project Thumbnail"
                technologies={["FastAPI", "Python", "React", "TypeScript", "Tailwind"]}
                links={[{ title: "GitHub", url: "https://github.com/jeffc25/tldrover" }]}
            />
            <Project
                title="Chat App"
                description="A minimalist chat application with live messaging and private chatrooms."
                website="https://chat-app.yerf.dev"
                image={chatapp}
                alt="Project Thumbnail"
                technologies={["React", "JavaScript", "Tailwind", "Firebase"]}
                links={[{ title: "Demo", url: "https://chat-app.yerf.dev" }, { title: "GitHub", url: "https://github.com/jeffc25/chat-app" }]}
            />
            {/* <Project
                title="Smart Article Analyzer"
                description="An application to generate summaries, keywords, and sentiment from articles, PDF documents, and arbritrary text."
                website="https://github.com/jeffc25/smart-article-analyzer-old"
                image={smartarticleanalyzer}
                alt="Project Thumbnail"
                technologies={["Flask", "Python", "Bootstrap"]}
                links={[{ title: "GitHub", url: "https://github.com/jeffc25/smart-article-analyzer-old" }]}
            /> */}
            <Project
                title="Cookietective"
                description="An investigation of cookie leakage vulnerabilities due to CNAME cloaking across over 17,000 domains."
                website="https://github.com/Cybersecurity-Project-Group/Cookietective"
                image={cookietective}
                alt="Project Thumbnail"
                technologies={["Python", "Selenium", "SQLite", "Mitmproxy"]}
                links={[{ title: "GitHub", url: "https://github.com/Cybersecurity-Project-Group/Cookietective" }]}
            />
            <Project
                title="BU Crossing"
                description="A Crossy Road-style game with custom Boston University-themed models."
                website="https://github.com/jeffc25/BU-Crossing"
                image={bucrossing}
                alt="Project Thumbnail"
                technologies={["Unity", "C#", "MagicaVoxel"]}
                links={[{ title: "GitHub", url: "https://github.com/jeffc25/BU-Crossing" }]}
            />
            <Project
                title="Virtual File System"
                description="A lightweight Linux virtual file system library based on the File Allocation Table."
                website="https://github.com/jeffc25/virtual-file-system"
                image={virtualfilesystem}
                alt="Project Thumbnail"
                technologies={["C"]}
                links={[{ title: "GitHub", url: "https://github.com/jeffc25/virtual-file-system" }]}
            />
            <Project
                title="Personal Portfolio"
                description="This website!"
                website="https://github.com/jeffc25/JeffC25.github.io"
                image={portfolio}
                alt="Project Thumbnail"
                technologies={["React", "TypeScript", "Tailwind"]}
                links={[{ title: "GitHub", url: "https://github.com/jeffc25/JeffC25.github.io" }]}
            />
        </div>
    )
};

export default Projects;
