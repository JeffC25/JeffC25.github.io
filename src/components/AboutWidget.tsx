import { ReactNode } from "react"

interface Props {
    children: ReactNode,
}

const AboutWidget = ({children}: Props) => {
    return (
        <div className="bg-neutral-200/50">
            {children}
        </div>
    )
}

export default AboutWidget;