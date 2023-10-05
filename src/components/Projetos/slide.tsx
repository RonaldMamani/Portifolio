"use client"

import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import TextSecundary from "../Texts/TextSecundary";
import TextCommon from "../Texts/TextCommon";
import ButtonLink from "../Buttons/ButtonLink";

import { SiReact, SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiTypescript, SiSass, SiNextdotjs } from "@icons-pack/react-simple-icons"

interface SlideProps {
    imageSrc: string;
    title: string;
    description: string;
    gitLink: string;
    hostedLink: string;
    technologies: string[];
}

const Slide: React.FC<SlideProps> = ({ imageSrc, title, description, gitLink, hostedLink, technologies }) => {
    const [onHover, setOnHover] = useState(false);

    return (
        <SwiperSlide
            onMouseEnter={() => setOnHover(!onHover)}
            onMouseLeave={() => setOnHover(!onHover)}
            className="relative"
        >
            <Image className="rounded-3xl" src={imageSrc} alt="slide_image" />
            <div
                className={`${onHover ? "absolute bottom-0 bg-black/95 h-full xl:h-[70%] w-full" : "hidden"} 
                            rounded-xl transition-transform py-3 px-4 
                            md:py-1 md:px-3 
                            lg:p-4`}
            >
                <div className="py-4 flex flex-col gap-8 items-center">
                    <TextSecundary className="text-3xl font-extrabold" text={title} />
                    <div className="flex flex-col gap-3">
                        <TextCommon className="text-gray-300 font-bold" text="Descrição: " />
                        <TextCommon className="text-sm text-gray-300" text={description} />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <TextCommon className="text-gray-300 font-bold" text="Links:" />
                        <div className="flex flex-col md:flex-row gap-5">
                            <ButtonLink link={gitLink} content="Repositório GIT" />
                            <ButtonLink link={hostedLink} content="Site Hospedado" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <TextCommon className="text-gray-300 font-bold" text="Tecnologias Usadas:" />
                        <div className="flex gap-5">
                            {technologies.map((tech, index) => (
                                <span key={index} title={tech}>
                                    {tech === "HTML" && <SiHtml5 width={30} height={30} color="#E34F26" />}
                                    {tech === "CSS" && <SiCss3 width={30} height={30} color="#1572B6" />}
                                    {tech === "JavaScript" && <SiJavascript width={30} height={30} color="#F7DF1E" />}
                                    {tech === "ReactJs" && <SiReact width={30} height={30} color="#61DAFB" />}
                                    {tech === "TailwindCSS" && <SiTailwindcss width={30} height={30} color="#06B6D4" />}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default Slide;
