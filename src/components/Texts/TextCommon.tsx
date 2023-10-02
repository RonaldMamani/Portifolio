import { Text } from "./TextPrincipal";

export default function TextCommon({text, className} : Text) {
    return (
        <p className={className}>{text}</p>
    )
}