interface Props {
    category: string,
    skills: string[],
}

const SkillCategory = ({ category, skills }: Props) => {
    return (
        <>
            <h1 className="text-xl text-lime-500">
                {category}
            </h1>
            <ul className="flex flex-wrap">
                {skills.map((skill) => (<li className="bg-neutral-200/50 shadow-md rounded-md p-2 mr-2 mb-2">{skill}</li>))}
            </ul>
        </>
    )
}

export default SkillCategory