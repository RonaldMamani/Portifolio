import { Text } from "./TextPrincipal";

export default function TextSecundary({text, className}: Text) {
    return (
        <h4 className={className}>{text}</h4>
    )
}