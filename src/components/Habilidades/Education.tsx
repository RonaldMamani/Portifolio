import TextSecundary from "../Texts/TextSecundary";
import CardEducation from "../Cards/CardEducation";

export default function Education() {
    return (
        <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col items-center gap-8">
                <TextSecundary className="text-4xl font-bold" text="Formação" />
                <div className="grid grid-cols-2 gap-8">
                    <CardEducation NameInstitution="Governo Estadual - Escola Publica" Status="Ensino Medio - Completo" className="bg-[url('../../public/SP-logo.png')]" />
                    <CardEducation NameInstitution="Anhembi Morumbi - Sistemas de Informação" Status="Bacharelato - 2019 - Em Andamento" className="bg-[url('../../public/UAM.jpg')]" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <TextSecundary className="text-4xl font-bold" text="Cursos" />
                <div className="grid grid-cols-2 gap-8">
                    <CardEducation NameInstitution="Alura" Status="Cursos Online - 2022" className="bg-[url('../../public/alura-logo.png')]" />
                    <CardEducation NameInstitution="One Bit Code" Status="Cursos Online - 2023" className="bg-[url('../../public/OBC-logo.jpg')]" />
                </div>
            </div>
        </div>
    )
}