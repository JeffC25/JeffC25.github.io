import pfp from "../assets/pfp.jpg"

interface Props {
    tab: number,
}

const AboutWidget = ({ tab }: Props) => {
    return (
        <section className={`pt-10 w-full flex flex-row flex-grow justify-center ${(tab == 0 ? "block" : "hidden")}`}>
            <p className="md:w-2/3">
                I'm a 4th year Computer Engineering student at Boston University.
                <br /><br />
                I have experience with fullstack web development, devOps, machine learning, and cloud computing.
                <br /><br />
                When I'm not developing, I enjoy cooking, drawing, and playing the guitar.
            </p>
            <div className="w-1/4 pl-10 aspect-square hidden md:block flex-grow">
                <div className="relative">
                    <img
                        src={pfp}
                        className="aspect-square object-cover rounded-md bottom-2 right-2 absolute shadow-sm"
                        referrerPolicy="no-referrer"
                    />
                    <div className="aspect-square w-full rounded-md bg-gradient-to-tr from-lime-300 via-cyan-400 to-blue-500">
                        <div className="aspect-square "></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutWidget;