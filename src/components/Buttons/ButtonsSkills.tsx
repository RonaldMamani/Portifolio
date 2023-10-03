type Skills = {
    content: string,
    className : string
    onClick: () => void
}

export default function ButtonSkills({content, className, onClick} : Skills) {
    return (
        <button 
            className={`${className} text-xl font-semibold transition-colors hover:text-sky-50 hover:border-b-4`} 
            onClick={onClick} >
            {content}
        </button>
    )
}