interface Props {
    thumbnail: string,
    demo: string,
    repo: string,

}

const ProjectWidget = ({thumbnail, demo, repo}: Props) => {
    return (
        <div className="project-widget">
            <h2>
                <img src={thumbnail} alt="Project Thumbnail" />
                <div className="">
                    <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a href={repo} target="_blank" rel="noopener noreferrer">Repo</a>
                </div>
            </h2>
        </div>
    )
}

export default ProjectWidget;