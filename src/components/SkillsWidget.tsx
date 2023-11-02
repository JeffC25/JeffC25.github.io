interface Props {
    tab: number,
}

const SkillsWidget = ({tab}: Props) => {
    return (
        <section className={`w-full pt-20 flex space-x-2 justify-between ${(tab == 1 ? "block" : "hidden")}`}>
            <div className="">
                <h1 className="text-2xl text-lime-500 mb-2">
                    Languages
                </h1>
                <ul className="text-xl md:text-3xl space-y-2">
                    <li>Go</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-2xl text-green-500 mb-2">
                    Frameworks
                </h1>
                <ul className="text-xl md:text-3xl space-y-2">
                    <li>React</li>
                    <li>Svelte</li>
                    <li>Express.js</li>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>ASP.NET</li>
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-2xl text-cyan-500 mb-2">
                    Databases
                </h1>
                <ul className="text-xl md:text-3xl space-y-2">
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Neo4j</li>
                </ul>
            </div>
            <div className=" ">
                <h1 className="text-2xl text-blue-500 mb-2">
                    Tools
                </h1>
                <ul className="text-xl md:text-3xl space-y-2">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>NGINX</li>
                    <li>AWS</li>

                </ul>
            </div>
        </section>
    )
}

export default SkillsWidget;