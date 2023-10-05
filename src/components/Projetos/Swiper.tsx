"use client"

import React from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import Slide from "./slide";

import projeto1 from "@/../public/Projects/Blogr.jpg"

const slidesData = [
    {
        imageSrc: "Projeto1.jpg",
        title: projeto1,
        description: "Descrição do Projeto 1",
        gitLink: "https://github.com/projeto1",
        hostedLink: "https://projeto1.com",
        technologies: ["HTML", "CSS", "JavaScript"],
    },{
        imageSrc: "Projeto1.jpg",
        title: projeto1,
        description: "Descrição do Projeto 1",
        gitLink: "https://github.com/projeto1",
        hostedLink: "https://projeto1.com",
        technologies: ["HTML", "CSS", "JavaScript"],
    },{
        imageSrc: "Projeto1.jpg",
        title: projeto1,
        description: "Descrição do Projeto 1",
        gitLink: "https://github.com/projeto1",
        hostedLink: "https://projeto1.com",
        technologies: ["HTML", "CSS", "JavaScript"],
    },{
        imageSrc: "Projeto1.jpg",
        title: projeto1,
        description: "Descrição do Projeto 1",
        gitLink: "https://github.com/projeto1",
        hostedLink: "https://projeto1.com",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
  // Adicione mais dados dos slides aqui
];

function SwiperJs() {
    return (
        <Swiper>
        {slidesData.map((slide, index) => (
            <Slide key={index} {...slide} />
        ))}
        </Swiper>
    );
}

export default SwiperJs;
