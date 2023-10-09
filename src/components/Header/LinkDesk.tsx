type Link = {
    Ref: string,
    content: string
}

export default function LinkDesk({Ref,content} : Link) {
    return (
        <a href={Ref} className="
            uppercase text-sky-700 font-bold px-2
            hover:text-white hover:border-b-4 hover:pb-1 hover:border-b-white 
            transition-all">
            {content}
        </a>
    )
}