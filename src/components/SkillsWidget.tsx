import Skill from "./Skill";

interface Props {
    tab: number,
}

const SkillsWidget = ({ tab }: Props) => {
    return (
        <section className={`w-full pt-10 flex flex-col space-y-4 justify-between  ${(tab == 1 ? "block" : "hidden")}`}>
            <div className="">
                <h1 className="text-xl text-lime-500">
                    Languages
                </h1>
                <ul className="flex flex-wrap">
                    {Skill("Go")}
                    {Skill("C++")}
                    {Skill("C#")}
                    {Skill("Python")}
                    {Skill("JavaScript")}
                    {Skill("TypeScript")}
                    {Skill("Java")}
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-xl text-green-500">
                    Frameworks
                </h1>
                <ul className="flex flex-wrap">
                    {Skill("React")}
                    {Skill("Svelte")}
                    {Skill("Remix")}
                    {Skill("Express.js")}
                    {Skill("Flask")}
                    {Skill("Django")}
                    {Skill("ASP.NET")}
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-xl text-cyan-500">
                    Databases
                </h1>
                <ul className="flex flex-wrap">
                    {Skill("PostgreSQL")}
                    {Skill("SQLite")}
                    {Skill("MongoDB")}
                    {Skill("Redis")}
                    {Skill("Neo4j")}
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-xl text-blue-500">
                    Tools
                </h1>
                <ul className="flex flex-wrap">
                    {Skill("Node.js")}
                    {Skill("Docker")}
                    {Skill("Kubernetes")}
                    {Skill("NGINX")}
                    {Skill("AWS")}
                </ul>
            </div>
        </section>
    )
}

export default SkillsWidget;