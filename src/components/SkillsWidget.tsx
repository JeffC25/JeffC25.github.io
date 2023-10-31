interface Props {
    tab: number,
}

const SkillsWidget = ({tab}: Props) => {
    return (
        <section className={`pt-20 h-fill flex flex-col-reverse md:flex-row flex-grow p-2 ${(tab == 0 ? "block" : "hidden")}`}>
            <p className="text-xl w-3/4 pr-10">
                My name is Jeffrey Chen, and I'm a 4th year student studying Computer Engineering at Boston University.
                I'm passionate about web development, scalable architectures, and open-source software. 
                When I'm not developing, I enjoy cooking, drawing, and playing the guitar.
            </p>
            <div className="w-1/2 h-1/2 md:w-1/4 md:h-1/4 flex-grow aspect-square ">
                <div className="relative">
                    <img 
                        src="https://media.licdn.com/dms/image/C5603AQHmD3d2p0CvPg/profile-displayphoto-shrink_800_800/0/1655080206114?e=1703721600&v=beta&t=xNy3DQr2macGwFxH3VdJ3tdPVCimWHukv67CfK6PO44" 
                        className="aspect-square object-cover rounded-md bottom-2 right-2 absolute shadow-sm"
                    />
                    <div className="aspect-square w-full rounded-md bg-gradient-to-r from-lime-300 via-cyan-400 to-blue-500"></div>
                </div>
            </div>
        </section>
    )
}

export default SkillsWidget;