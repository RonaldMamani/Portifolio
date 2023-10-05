"use client"

import Projeto1 from "@/../public/Projects/Blogr.jpg"
import Projeto2 from "@/../public/Projects/Sunnyside.jpg"
import Projeto3 from "@/../public/Projects/NewsHP.jpg"
import Projeto4 from "@/../public/Projects/TypeMaster.jpg"
import {useState} from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TextDinamic from "../Texts/TextDinamic"
import TextSecundary from "../Texts/TextSecundary"
import TextCommon from "../Texts/TextCommon"
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiTypescript, SiSass, SiNextdotjs } from "@icons-pack/react-simple-icons"
import ButtonLink from "../Buttons/ButtonLink"
import Slide from "./slide"

export default function Projetos() {

    const [onBlogr, setOnBlogr] = useState(false)
    const [onSunny, setOnSunny] = useState(false)
    const [onNews, setOnNews] = useState(false)
    const [onType, setOnType] = useState(false)

    const slidesData = [
        {
            imageSrc: Projeto1,
            title: "Projeto 1",
            description: "Descrição do Projeto 1",
            gitLink: "https://github.com/projeto1",
            hostedLink: "https://projeto1.com",
            technologies: ["HTML", "CSS", "JavaScript"],
            },
            // Adicione mais dados dos slides aqui
    ];

    return (
        <section className="
            px-4 py-4 flex flex-col text-center gap-5
            md:p-10 md:gap-8
            lg:px-32 lg:gap-10
            ">
            <TextDinamic className="text-3xl font-extrabold" classNameDinamic="text-sky-800" text="Meus" textDinamic1="_Projects" textDinamic2="_Projetos"  />
            <div className="">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    keyboard
                    spaceBetween={120}
                    slidesPerView={2}
                    breakpoints={{
                        320:{
                            slidesPerView: 1
                        },
                        650:{
                            slidesPerView: 2
                        }
                    }}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="xl:w-[75%]"
                >
                    <SwiperSlide onMouseEnter={() => setOnBlogr(!onBlogr)} onMouseLeave={() => setOnBlogr(!onBlogr)} className="relative">
                        <Image className="rounded-3xl" src={Projeto1} alt="slide_image"/>
                        <div className={`${onBlogr ? "absolute bottom-0 bg-black/95 h-full xl:h-[70%] w-full" : "hidden"} 
                            rounded-xl transition-transform py-3 px-4 
                            md:py-1 md:px-3 
                            lg:p-4`}>
                            <div className="py-4 flex flex-col gap-8 items-center">
                                <TextSecundary className="text-3xl font-extrabold" text="Blogr" />
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Descrisão: " />
                                    <TextCommon 
                                        className="text-sm text-gray-300" 
                                        text="Site de Blogr, com estrutura baseado em pagina em Landing Page, o site foi desenvolvido em ReactJS com Vite e utilizando o Framework
                                            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop
                                            " 
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Links:" />
                                    <div className="flex flex-col md:flex-row gap-5">
                                        <ButtonLink link="#" content="Repositorio GIT" />
                                        <ButtonLink link="#" content="Site Hospedado" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Tecnologias Usadas:" />
                                    <div className="flex gap-5">
                                        <SiHtml5 width={30} height={30} color="#E34F26" title="HTML" />
                                        <SiCss3 width={30} height={30} color="#1572B6" title="CSS" />
                                        <SiJavascript width={30} height={30} color="#F7DF1E" title="JavaScript" />
                                        <SiReact width={30} height={30} color="#61DAFB" title="ReactJs" />
                                        <SiTailwindcss width={30} height={30} color="#06B6D4" title="TailwindCSS" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onMouseEnter={() => setOnSunny(!onSunny)} onMouseLeave={() => setOnSunny(!onSunny)} className="relative">
                        <Image className="rounded-3xl" src={Projeto2} alt="slide_image" />
                        <div className={`${onSunny ? "absolute bottom-0 bg-black/95 h-[60%] w-full" : "hidden"} rounded-xl transition-transform p-5`}>
                            <div className="py-4 flex flex-col gap-5 items-center">
                                <TextSecundary className="text-3xl font-extrabold" text="Sunnyside" />
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Descrisão: " />
                                    <TextCommon 
                                        className="text-sm text-gray-300" 
                                        text="Site de Sunnyside, com estrutura baseado em pagina de nutrição, o site foi desenvolvido em ReactJS com Vite e usando Framework
                                            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop
                                            " 
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <TextCommon className="" text="Links:" />
                                    <div className="flex gap-5">
                                        <ButtonLink link="#" content="Repositorio GIT" />
                                        <ButtonLink link="#" content="Site Hospedado" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Tecnologias Usadas:" />
                                    <div className="flex gap-5">
                                        <SiHtml5 width={30} height={30} color="#E34F26" title="HTML" />
                                        <SiCss3 width={30} height={30} color="#1572B6" title="CSS" />
                                        <SiJavascript width={30} height={30} color="#F7DF1E" title="JavaScript" />
                                        <SiReact width={30} height={30} color="#61DAFB" title="ReactJs" />
                                        <SiTailwindcss width={30} height={30} color="#06B6D4" title="TailwindCSS" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onMouseEnter={() => setOnNews(!onNews)} onMouseLeave={() => setOnNews(!onNews)} className="relative">
                        <Image className="rounded-3xl" src={Projeto3} alt="slide_image" />
                        <div className={`${onNews ? "absolute bottom-0 bg-black/95 h-[60%] w-full" : "hidden"} rounded-xl transition-transform p-5`}>
                            <div className="py-4 flex flex-col gap-5 items-center">
                                <TextSecundary className="text-3xl font-extrabold" text="News" />
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Descrisão: " />
                                    <TextCommon 
                                        className="text-sm text-gray-300" 
                                        text="Site de News, a estrutura é baseado em uma pagina de Noticias de Games, o site foi desenvolvido em ReactJS com Vite e com os Frameworks
                                            de TailwindCSS e Bootstrap, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop
                                            " 
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <TextCommon className="" text="Links:" />
                                    <div className="flex gap-5">
                                        <ButtonLink link="#" content="Repositorio GIT" />
                                        <ButtonLink link="#" content="Site Hospedado" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Tecnologias Usadas:" />
                                    <div className="flex gap-5">
                                        <SiHtml5 width={30} height={30} color="#E34F26" title="HTML" />
                                        <SiCss3 width={30} height={30} color="#1572B6" title="CSS" />
                                        <SiJavascript width={30} height={30} color="#F7DF1E" title="JavaScript" />
                                        <SiReact width={30} height={30} color="#61DAFB" title="ReactJs" />
                                        <SiTailwindcss width={30} height={30} color="#06B6D4" title="TailwindCSS" />
                                        <SiBootstrap width={30} height={30} color="#7952B3" title="Bootstrap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide onMouseEnter={() => setOnType(!onType)} onMouseLeave={() => setOnType(!onType)} className="relative">
                        <Image className="rounded-3xl" src={Projeto4} alt="slide_image" />
                        <div className={`${onType ? "absolute bottom-0 bg-black/95 h-[60%] w-full" : "hidden"} rounded-xl transition-transform p-5`}>
                            <div className="py-4 flex flex-col gap-5 items-center">
                                <TextSecundary className="text-3xl font-extrabold" text="TypeMaster" />
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Descrisão: " />
                                    <TextCommon 
                                        className="text-sm text-gray-300" 
                                        text="Site de TypeMaster, a pagina e baseada em uma pagina de produto a venda, o site foi desenvolvido em ReactJS com Vite e utilizando o Framework
                                            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop
                                            " 
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <TextCommon className="" text="Links:" />
                                    <div className="flex gap-5">
                                        <ButtonLink link="#" content="Repositorio GIT" />
                                        <ButtonLink link="#" content="Site Hospedado" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <TextCommon className="text-gray-300 font-bold" text="Tecnologias Usadas:" />
                                    <div className="flex gap-5">
                                        <SiHtml5 width={30} height={30} color="#E34F26" title="HTML" />
                                        <SiCss3 width={30} height={30} color="#1572B6" title="CSS" />
                                        <SiJavascript width={30} height={30} color="#F7DF1E" title="JavaScript" />
                                        <SiReact width={30} height={30} color="#61DAFB" title="ReactJs" />
                                        <SiTailwindcss width={30} height={30} color="#06B6D4" title="TailwindCSS" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="flex">
                        <div className="swiper-button-prev slider-arrow"></div>
                        <div className="swiper-button-next slider-arrow"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
    </section>
    )
}