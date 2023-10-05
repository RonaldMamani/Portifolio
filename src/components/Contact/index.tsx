import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from "@icons-pack/react-simple-icons";
import TextDinamic from "../Texts/TextDinamic";
import TextSecundary from "../Texts/TextSecundary";

export default function Contact() {
    return (
        <section id="contact" className="
            bg-[url('../../public/contact-bg.jpg')] bg-cover bg-center 
            relative
            lg:h-screen">
            <div className="absolute top-10 inset-0 flex flex-col gap-10
                py-4 px-4
                md:p-10 md:top-14
                lg:px-32 lg:top-20
                ">
                <TextSecundary className="text-4xl md:text-5xl font-bold uppercase text-center" text="Entre em Contato Comigo" />
                <div className="flex flex-col gap-14 items-center">
                    <div className="flex flex-col text-center gap-8">
                        <TextDinamic 
                            className="text-2xl font-bold" classNameDinamic="text-sky-700 uppercase" 
                            text="Entre em contato comigo pelo" textDinamic1="_Email" textDinamic2="_WhatsApp" 
                        />
                        <div className="
                            flex flex-col justify-center gap-8 items-center
                            lg:flex-row
                            ">
                            <a href="https://api.whatsapp.com/send?phone=5511912628484" className="
                                border-4 border-gray-500 rounded-full py-2 px-4 items-center flex gap-3
                                group hover:border-green-500 transition-colors
                                ">
                                <SiWhatsapp className="group-hover:fill-[#25D366] rounded-full transition-colors" />
                                <span className="text-xl font-bold group-hover:text-green-500 transition-colors">(11) 91262-8484</span>
                            </a>
                            <button className="
                                border-4 border-gray-500 rounded-full py-2 px-4 items-center flex gap-3
                                group hover:border-[#EA4335] transition-colors
                                ">
                                <SiGmail className="group-hover:fill-[#EA4335] rounded-full transition-colors" />
                                <span className="text-xl font-bold group-hover:text-[#EA4335] transition-colors">Ronaldmamani140@gmail.com</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center">
                        <TextDinamic 
                                className="text-2xl font-bold" classNameDinamic="text-sky-700 uppercase" 
                                text="Minhas" textDinamic1="_Redes" textDinamic2="_Sociais" 
                        />
                        <div className="flex justify-center gap-10">
                            <a href="https://www.facebook.com/RonaldMamani1400/">
                                <SiFacebook className="hover:fill-[#1877F2] transition-colors" width={50} height={50} />
                            </a>
                            <a href="https://www.instagram.com/ronald_mamani1000/">
                                <SiInstagram className="hover:fill-[#E4405F] transition-colors" width={50} height={50} />
                            </a>
                            <a href="https://www.linkedin.com/in/ronaldo-mamani-339b0b192/">
                                <SiLinkedin className="hover:fill-[#0A66C2] transition-colors" width={50} height={50} />
                            </a>
                            <a href="https://github.com/RonaldMamani">
                                <SiGithub className="hover:fill-[#5f5f5f] transition-colors" width={50} height={50} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black/80 min-h-screen"></div>
        </section>
    )
}