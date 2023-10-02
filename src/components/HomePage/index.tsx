import TextPrincipal from "../Texts/TextPrincipal";
import TextSecundary from "../Texts/TextSecundary";
import TextDinamic from "../Texts/TextDinamic";


export default function HomePage(){
    return (
        <section className="relative">
            <div className="bg-[url('../../public/background.avif')] bg-cover blur-sm h-[calc(100vh-7rem)]">
                <div className="bg-black/60 h-full"></div>
            </div>
            <div className="
                absolute flex flex-col gap-8
                px-4 py-4 text-center top-12
                md:p-10 md:text-start md:top-20
                lg:px-32 lg:top-28
                ">
                    <TextPrincipal className="text-3xl font-semibold" text="Olá, Meu Nome é"/>
                    <TextSecundary className="uppercase text-6xl font-extrabold" text="Ronaldo Arley"/>
                    <TextDinamic text="Eu sou " 
                        className="text-4xl font-semibold" classNameDinamic="uppercase text-blue-500" 
                        textDinamic1="Programador Front-End" textDinamic2="Desenvolvedor Front-End" 
                    />
                </div>
        </section>
    )
}