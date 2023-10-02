export type Text = {
    text: string,
    className: string
}


export default function TextPrincipal({text,className} : Text) {
    return (
        <h3 className={className}>{text}</h3>
    )
}