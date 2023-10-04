import TextSpan from "../Texts/TextSpan"
import TextDinamic from "../Texts/TextDinamic"

export default function Footer() {
    return (
        <footer className="
            px-4 py-4 flex flex-col gap-5 items-center
            md:p-10 md:flex-row md:justify-between md:items-start
            lg:px-32 
            ">
            <a href="/" title="Logotipo">
                <TextDinamic className="text-2xl font-semibold" classNameDinamic=" text-sky-700" text="RONALD" textDinamic1="_ARLEY" textDinamic2="_MAMANI" />
            </a>
            <div className="
                flex flex-col gap-3 text-center
                md:text-start
                ">
                <TextSpan text="Feito com Esforço por Ronaldo Arley" />
                <TextSpan text="@ Todos os Direitos Reservados - Ronaldo Arley" />
            </div>
        </footer>
    )
}