import { useState } from "react";
import AboutWidget from "../components/AboutWidget";
import SkillsWidget from "../components/SkillsWidget";

const About = () => {
    const [tab, setTab] = useState(0);

    return (
        <div id="about" className="relative w-screen h-full snap-start flex flex-col justify-center items-center">
            <section className="h-2/3 w-full md:w-2/3 px-10 flex flex-col">
                <nav className="w-1/3 flex flex-row rounded-md backdrop-blur-md shadow-md bg-gradient-to-r from-cyan-500 to-lime-300">
                    <button onClick={() => setTab(0)} className={`w-full hover:bg-transparent rounded-l-md py-4 ${(tab == 0 ? "bg-transparent" : "bg-neutral-200")}`}>About</button>{/* <button onClick={() => setTab(1)} className={`w-full hover:bg-transparent py-4 ${(tab == 1 ? "bg-transparent" : "bg-neutral-200")}`}>Experience</button> */}
                    <button onClick={() => setTab(1)} className={`w-full hover:bg-transparent rounded-r-md py-4 ${(tab == 1 ? "bg-transparent" : "bg-neutral-200")}`}>Skills</button>
                </nav>
                <AboutWidget tab={tab} />
                <SkillsWidget tab={tab} />
            </section>
        </div>
    )
};

export default About;