interface demo {
    title: string,
    url: string,
}

interface Props {
    title: string,
    description: string,
    website: string,
    image: string,
    alt: string,
    technologies: string[],
    links: demo[],
}

const Project = ({title, description, website, image, alt, technologies, links}: Props) =>{
    return(
        <section className="w-2/3 2xl:w-1/2 rounded-lg shadow-lg h-fit flex flex-col md:flex-row bg-neutral-100">
            <a href={website} className="md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <img src={image} alt={alt} className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"/>
            </a>
            <div className="md:w-1/2 p-2 rounded-b-lg md:rounded-r-lg flex flex-col">
                <div className="bg-clip flex flex-row space-x-1">
                    <h2 className="text-lg">{title}</h2>
                    <div className="flex-grow"></div>
                    <div className="flex flex-row flex-wrap justify-end">
                        {links.map((link) => (
                            <a href={link.url} className="border px-1 ml-1 h-min border-lime-400 hover:bg-lime-400 hover:animate-pulse rounded-md text-sm">{link.title}</a>
                        ))}
                    </div>
                </div>
                
                <div className="h-px w-full my-1 bg-gradient-to-r from-cyan-500 from-50% to-lime-300"></div>

                <span className="text pb-10 md:pb-0">{description}</span>

                <div className="flex-grow"></div>

                <div className="flex flex-row flex-wrap">
                    {technologies.map((tech) => (
                        <p className="border-cyan-500 border rounded-md p-1 mr-1 mb-1 text-sm">{tech}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project