type BtnLink = {
    content: string
    link: string
}

export default function ButtonLink({content, link} : BtnLink) {
    return (
        <button className="px-4 py-2 bg-sky-800 text-sm font-semibold rounded-full transition-colors hover:bg-sky-600 hover:font-bold"><a href={link}>{content}</a></button>
    )
}