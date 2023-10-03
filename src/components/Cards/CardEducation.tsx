import TextCommon from "../Texts/TextCommon"
import TextSecundary from "../Texts/TextSecundary"

type Education = {
    NameInstitution: string,
    className: string,
    Status: string,
}

export default function CardEducation({NameInstitution, className, Status} : Education) {
    return (
        <div className="flex flex-col gap-3 items-center text-center">
            <div className={`${className} bg-cover bg-center p-32 rounded-3xl`}></div>
            <TextSecundary className="uppercase font-semibold" text={`${NameInstitution}`} />
            <TextCommon className="text-sm" text={`${Status}`} />
        </div>
    )
}