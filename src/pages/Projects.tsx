import Project from '../components/Project';
import moviebrowser from '../assets/projects/moviebrowser/1.png';
import chatapp from '../assets/projects/chatapp/1.png';
import cookietective from '../assets/projects/cookietective/1.png';
import smartarticleanalyzer from '../assets/projects/smartarticleanalyzer/1.png';
import bucrossing from '../assets/projects/bucrossing/1.jpg';
import seniordesign from '../assets/projects/seniordesign/1.png';
import virtualfilesystem from '../assets/projects/virtualfilesystem/1.png';
import portfolio from '../assets/projects/portfolio/1.png';

const Projects = () => {
    return (
        <div id="projects" className="w-full snap-start flex justify-center flex-col items-center space-y-10 py-24">
            <h1 className="text-xl">Projects</h1>
            <Project
                title="Fridge Tracker"
                description="A touchscreen attachment for tracking your fridge contents with automated receipt scanning, recipe suggestions, expiration date alerts, and mobile device syncing."
                website="#"
                image={seniordesign}
                alt="Project Thumbnail"
                technologies={["React", "React Native", "TypeScript", "Python", "DynamoDB"]}
                links={[{ title: "In Progress", url: "#" }]}
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
                title="Chat App"
                description="A minimalist chat application with live messaging and private chatrooms."
                website="https://chat-app.yerf.dev"
                image={chatapp}
                alt="Project Thumbnail"
                technologies={["React", "JavaScript", "Tailwind", "Firebase"]}
                links={[{ title: "Demo", url: "https://chat-app.yerf.dev" }, { title: "GitHub", url: "https://github.com/jeffc25/chat-app" }]}
            />
            <Project
                title="Smart Article Analyzer"
                description="An application to generate summaries, keywords, and sentiment from articles, PDF documents, and arbritrary text."
                website="github.com/jeffc25/smart-article-analyzer"
                image={smartarticleanalyzer}
                alt="Project Thumbnail"
                technologies={["Python", "Flask", "Bootstrap"]}
                links={[{ title: "GitHub", url: "jeffc25/smart-article-analyzer" }]}
            />
            <Project
                title="Cookietective"
                description="An investigation of cookie leakage vulnerabilities due to CNAME cloaking across over 17,000 domains."
                website="github.com/Cybersecurity-Project-Group/Cookietective"
                image={cookietective}
                alt="Project Thumbnail"
                technologies={["Python", "Selenium", "SQLite", "Mitmproxy"]}
                links={[{ title: "GitHub", url: "github.com/Cybersecurity-Project-Group/Cookietective" }]}
            />
            <Project
                title="BU Crossing"
                description="A Crossy Road-style game with custom Boston University-themed models."
                website="github.com/jeffc25/BU-Crossing"
                image={bucrossing}
                alt="Project Thumbnail"
                technologies={["C#", "Unity", "MagicaVoxel"]}
                links={[{ title: "GitHub", url: "github.com/jeffc25/BU-Crossing" }]}
            />
            <Project
                title="Virtual File System"
                description="A lightweight Linux virtual file system library based on the File Allocation Table."
                website="github.com/jeffc25/virtual-file-system"
                image={virtualfilesystem}
                alt="Project Thumbnail"
                technologies={["C"]}
                links={[{ title: "GitHub", url: "github.com/jeffc25/virtual-file-system" }]}
            />
            <Project
                title="Personal Portfolio"
                description="This website!"
                website="github.com/jeffc25/JeffC25.github.io"
                image={portfolio}
                alt="Project Thumbnail"
                technologies={["React", "TypeScript", "Tailwind"]}
                links={[{ title: "GitHub", url: "github.com/jeffc25/JeffC25.github.io" }]}
            />
        </div>
    )
};

export default Projects;
