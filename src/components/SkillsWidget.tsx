// import Skill from "./Skill";
import SkillCategory from "./SkillCategory";

interface Props {
    tab: number,
}

const SkillsWidget = ({ tab }: Props) => {
    return (
        <section className={`w-full pt-10 flex flex-col text-sm md:text-md ${(tab == 1 ? "block" : "hidden")}`}>
            {SkillCategory({ category: "Languages", skills: ["Go", "C", "C++", "C#", "TypeScript", "JavaScript", "Python", "Java", "Lua", "HTML/CSS", "Verilog", "MATLAB"] })}
            {SkillCategory({ category: "Frameworks", skills: ["React", "Svelte", "Remix", "Express.js", "Flask", "Django", "ASP.net", "Unity"] })}
            {SkillCategory({ category: "Databases", skills: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "Neo4j", "DynamoDB"] })}
            {SkillCategory({ category: "Tools", skills: ["Node.js", "Docker", "Kubernetes", "Git", "NGINX", "Amazon Web Services", "Google Cloud"] })}
            {SkillCategory({ category: "Concepts", skills: ["Microservices", "REST APIs", "gRPC", "Object-Oriented Design", "Agile", "Unit Testing"] })}
        </section>
    )
}

export default SkillsWidget;