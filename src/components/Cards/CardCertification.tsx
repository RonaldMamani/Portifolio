import Image, { StaticImageData } from "next/image";
import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

type CardCertification = {
    image: StaticImageData,
    NameCertification: string,
    Institution: string,
    Age: string
}

export default function CardCertification({image, NameCertification, Institution, Age} : CardCertification) {
    return (
        <div className="grid grid-cols-2 gap-5 border-4 border-gray-600 rounded-xl p-3">
            <Image className="rounded-full" src={image} alt="Instituição de Certificação" />
            <div className="flex flex-col gap-1">
                <TextSecundary className="font-bold" text={NameCertification} />
                <TextCommon className="text-gray-400 font-medium" text={Institution} />
                <span className="text-gray-500">{Age}</span>
            </div>
        </div>
    )
}