"use client"

import React, { useState } from "react";
import {SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import TextSecundary from "../Texts/TextSecundary";
import TextCommon from "../Texts/TextCommon";
import ButtonLink from "../Buttons/ButtonLink";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiSass, SiNextdotjs, SiTypescript, SiNodedotjs } from "@icons-pack/react-simple-icons";

type SlideProps = {
    imageSrc: StaticImageData;
    title: string;
    description: string;
    gitLink: string;
    hostedLink: string;
    technologies: string[];
};

export default function Slides({ imageSrc, title, description, gitLink, hostedLink, technologies } : SlideProps) {
    const [onHover, setOnHover] = useState(false);

    return (
        <SwiperSlide
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            >
            <Image className="rounded-3xl" src={imageSrc} alt="slide_image" />
            <div
                className={`${
                onHover ? "absolute bottom-0 bg-black/95 h-full xl:h-[75%] w-full" : "hidden"
                } 
                py-3 px-4 rounded-xl transition-transform transform hover:scale-105
                md:py-1 md:px-3 
                lg:p-4`}>
                <div className="py-4 flex flex-col gap-6 lg:gap-8 items-center">
                    <TextSecundary className="text-3xl font-extrabold uppercase" text={title} />
                    <div className="flex flex-col gap-3">
                        <TextCommon className="text-gray-300 font-bold uppercase" text="Descrição: " />
                        <TextCommon className="text-sm text-gray-300" text={description} />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <TextCommon className="text-gray-300 font-bold uppercase" text="Links:" />
                        <div className="flex flex-col md:flex-row gap-5">
                            <ButtonLink link={gitLink} content="Repositório GIT" />
                            <ButtonLink link={hostedLink} content="Site Hospedado" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <TextCommon className="text-gray-300 font-bold uppercase" text="Tecnologias Usadas:" />
                        <div className="flex gap-5 justify-center items-center">
                            {technologies.map((tech, index) => (
                                <span key={index} title={tech}>
                                    {tech === "HTML" && <SiHtml5 width={30} height={30} color="#E34F26" title="HTML" />}
                                    {tech === "CSS" && <SiCss3 width={30} height={30} color="#1572B6" title="CSS" />}
                                    {tech === "JavaScript" && <SiJavascript width={30} height={30} color="#F7DF1E" title="JavaScript" />}
                                    {tech === "ReactJs" && <SiReact width={30} height={30} color="#61DAFB" title="ReactJs" />}
                                    {tech === "TailwindCSS" && <SiTailwindcss width={30} height={30} color="#06B6D4" title="TailwindCSS" />}
                                    {tech === "Bootstrap" && <SiBootstrap width={30} height={30} color="#7952B3" title="Bootstrap5" />}
                                    {tech === "StyledComponents" && <SiStyledcomponents width={30} height={30} color="#D87893" title="StyledComponents" />}
                                    {tech === "Sass" && <SiSass width={30} height={30} color="#CC6699" title="Sass" />}
                                    {tech === "NextJs" && <SiNextdotjs width={30} height={30} color="#000" className="bg-white rounded-full" title="NextJs" />}
                                    {tech === "TypeScript" && <SiTypescript width={30} height={30} color="#3178C6" title="TypeScript" />}
                                    {tech === "NodeJs" && <SiNodedotjs width={30} height={30} color="#339933" title="NodeJs" />}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};
