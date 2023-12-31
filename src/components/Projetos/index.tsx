"use client"

//CSS Do SwipperJs
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import Blogr from "@/../public/Projects/Blogr.jpg"
import Sunnyside from "@/../public/Projects/Sunnyside.jpg"
import News from "@/../public/Projects/NewsHP.jpg"
import TypeMaster from "@/../public/Projects/TypeMaster.jpg"
import Loop from "@/../public/Projects/LoopStudio.jpg"
import Art from "@/../public/Projects/ArtGallery.jpg"
import Spitter from "@/../public/Projects/Splitter.jpg"

import TextDinamic from '../Texts/TextDinamic';
import Slides from './Slide';


const ProjetosPessoais = [
    {
        imageSrc: Spitter,
        title: "Spitter",
        description: `
            Site de Splitter, e um sistema de calculo de Gorgeta, esse calculo e aplicando a porcentagem da gorgeta com o numero de pessoas, assim gerando um valor, 
            o site foi desenvolvido em ReactJS utilizando o Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas.`,
        gitLink: "https://github.com/RonaldMamani/Splitter",
        hostedLink: "https://splitter-alpha.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        imageSrc: Art,
        title: "Art Gallery",
        description: `
            Site de Art Gallery, com estrutura baseado em uma pagina de Galeria, a pagina utiliza links com React Router, o site foi desenvolvido com NextJs, ReactJs e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas.`,
        gitLink: "https://github.com/RonaldMamani/Art_Gallety",
        hostedLink: "https://art-gallety.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs", "NextJs"],
    },
    {
        imageSrc: Loop,
        title: "Loop Studios",
        description: `
            Site de LoopStudios, com estrutura baseado em uma pagina de Studio, o site foi desenvolvido em ReactJS com Vite e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.`,
        gitLink: "https://github.com/RonaldMamani/LoopStudios_Page",
        hostedLink: "https://loop-studios-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        imageSrc: Blogr,
        title: "Blogr",
        description: `
            Site de Blogr, com estrutura baseado em pagina em Landing Page, o site foi desenvolvido em ReactJS com Vite e utilizando o 
            Framework do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.`,
        gitLink: "https://github.com/RonaldMamani/Blogr_Page",
        hostedLink: "https://blogr-page-dusky.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        imageSrc: Sunnyside,
        title: "SunnySide",
        description: `
            Site de Sunnyside, com estrutura baseado em pagina de nutrição, o site foi desenvolvido em ReactJS com Vite e usando Framework
            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/SunnySide-Page",
        hostedLink: "https://sunny-side-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
    {
        imageSrc: News,
        title: "News HomePage",
        description: `
            Site de News, a estrutura é baseado em uma pagina de Noticias de Games, o site foi desenvolvido em ReactJS com Vite e com os Frameworks
            de TailwindCSS e Bootstrap, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/News-HomePage",
        hostedLink: "https://news-home-page-ten.vercel.app/",
        technologies: ["HTML","JavaScript", "TailwindCSS", "Bootstrap", "ReactJs"],
    },
    {
        imageSrc: TypeMaster,
        title: "TypeMaster",
        description: `
            Site de TypeMaster, a pagina e baseada em uma pagina de produto a venda, o site foi desenvolvido em ReactJS com Vite e utilizando o Framework
            do TailwindCSS, a pagina é totalmente responsiva em diferentes tipos de telas como Mobile, Tablet e Desktop.
            `,
        gitLink: "https://github.com/RonaldMamani/Typemaster-Page",
        hostedLink: "https://typemaster-page.vercel.app/",
        technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "ReactJs"],
    },
]

export default function Projetos() {
    return (
        <section id='projetos' className="
            px-4 py-4 flex flex-col text-center gap-5 
            md:p-10 md:gap-8 
            lg:px-32 lg:py-16 lg:gap-10">
                <TextDinamic className="text-3xl font-extrabold" classNameDinamic="text-sky-700 uppercase" text="Meus" textDinamic1="_Projects" textDinamic2="_Projetos"  />
                <div className=''>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1000 * 3,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        keyboard
                        spaceBetween={120}
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                            slidesPerView: 1,
                            },
                            650: {
                            slidesPerView: 2,
                            },
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="xl:w-[70%]"
                        >
                            {ProjetosPessoais.map((slide, index) => (
                                <SwiperSlide key={index}>
                                <Slides
                                    imageSrc={slide.imageSrc}
                                    title={slide.title}
                                    description={slide.description}
                                    gitLink={slide.gitLink}
                                    hostedLink={slide.hostedLink}
                                    technologies={slide.technologies}
                                />
                                </SwiperSlide>
                            ))}
                        <div className="flex">
                                        <div className="swiper-button-prev slider-arrow"></div>
                                        <div className="swiper-button-next slider-arrow"></div>
                                        <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
        </section>
    );
}