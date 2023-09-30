type Text = {
    text : string
}

export default function TextSpan({text} : Text) {
    return(
        <span className="text-gray-500">{text}</span>
    )
}