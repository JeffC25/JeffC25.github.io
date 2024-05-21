import SkillCategory from "./SkillCategory";

interface Props {
    tab: number,
}

const SkillsWidget = ({ tab }: Props) => {
    return (
        <section className={`w-full pt-10 flex flex-col text-sm md:text-md ${(tab == 1 ? "block" : "hidden")}`}>
            <SkillCategory category="Languages" skills={[
                "Go", 
                "C", 
                "C++", 
                "TypeScript", 
                "JavaScript", 
                "Python", 
                "Java", 
                "C#", 
                "Zig",
                "Ruby", 
                "Lua", 
                "HTML/CSS", 
                // "Verilog", 
                // "MATLAB"
                ]} />

            <SkillCategory category="Frameworks" skills={[
                "React", 
                "Svelte", 
                "Remix", 
                "Express.js", 
                "Flask", 
                "Django", 
                "PyTorch", 
                "Spring Boot", 
                "ASP.net", 
                "Unity"
                ]} />

            <SkillCategory category="Databases" skills={[
                "PostgreSQL", 
                "SQLite", 
                "MongoDB", 
                "Redis", 
                "Neo4j", 
                "DynamoDB"
                ]} />

            <SkillCategory category="Tools" skills={[
                "Node.js", 
                "Docker", 
                "Kubernetes", 
                "Git", 
                "NGINX", 
                "Amazon Web Services", 
                "Google Cloud"
                ]} />

            <SkillCategory category="Concepts" skills={[
                "Microservices", 
                "Machine Learning", 
                "REST APIs", 
                "RPC", 
                "Object-Oriented Design", 
                "Agile", 
                "CI/CD"
                ]} />
        </section>
    )
}

export default SkillsWidget;
