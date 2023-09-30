import logo from "@/../public/logo.svg"
import Image from "next/image"
import TextSpan from "../Texts/TextSpan"

export default function Footer() {
    return (
        <footer className="
            px-4 py-4 flex flex-col gap-5 items-center
            md:p-10 md:flex-row md:justify-between md:items-start
            lg:px-32 
            ">
            <Image src={logo} alt="Logotipo" />
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