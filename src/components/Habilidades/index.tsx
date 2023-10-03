import Skills from "./Skills";

export default function Habilidades() {
    return (
        <section id="tecnologias" className="relative">
            <div className="bg-[url('../../public/tech-bg.jpg')] bg-cover lg:min-h-screen">
                <div className="bg-black/80 h-full">
                    <Skills />
                </div>
            </div>
        </section>
    )
}