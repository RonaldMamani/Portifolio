import NavBar from "./NavBar";
import TextDinamic from "../Texts/TextDinamic";

export default function Header() {

    return (
        <header className="
            px-4 py-4 bg-black flex justify-between
            md:p-10
            lg:px-32
            ">
            <a href="/" title="Logotipo">
                <TextDinamic className="text-2xl font-extrabold" classNameDinamic=" text-sky-700" text="RONALD" textDinamic1="_ARLEY" textDinamic2="_MAMANI" />
            </a>
            <NavBar />
        </header>
    )
}