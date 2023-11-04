interface Props {
    tab: number,
}

const AboutWidget = ({ tab }: Props) => {
    return (
        <section className={`pt-20 w-full flex flex-row flex-grow justify-center ${(tab == 0 ? "block" : "hidden")}`}>
            <p className="text-xl md:w-2/3">
                My name is Jeffrey Chen, and I'm a 4th year student studying Computer Engineering at Boston University.
                I'm passionate about web development, scalable architectures, and open-source software.
                When I'm not developing, I enjoy cooking, drawing, and playing the guitar.
            </p>
            <div className="w-1/4 pl-10 aspect-square hidden lg:block flex-grow">
                <div className="relative">
                    <img
                        src="https://media.licdn.com/dms/image/C5603AQHmD3d2p0CvPg/profile-displayphoto-shrink_800_800/0/1655080206114?e=1703721600&v=beta&t=xNy3DQr2macGwFxH3VdJ3tdPVCimWHukv67CfK6PO44"
                        className="aspect-square object-cover rounded-md bottom-2 right-2 absolute shadow-sm"
                        referrerPolicy="no-referrer"
                    />
                    <div className="aspect-square w-full rounded-md bg-gradient-to-tr from-lime-300 via-cyan-400 to-blue-500"></div>
                </div>
            </div>
        </section>
    )
}

export default AboutWidget;