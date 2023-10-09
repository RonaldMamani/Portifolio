type Link = {
    Ref: string,
    content: string
}

export default function LinkMobile({Ref, content} : Link) {
    return (
        <a href={Ref} className="
            uppercase text-black font-bold 
            hover:text-blue-700
            transition-colors">
            {content}
        </a>
    )
}