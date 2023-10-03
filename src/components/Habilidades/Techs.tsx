"use client"

import Image from "next/image";
import TextCommon from "../Texts/TextCommon";
import TextSecundary from "../Texts/TextSecundary";

import css from "@/../public/css.svg"
import html from "@/../public/html.svg"
import js from "@/../public/javascript.svg"
import sass from "@/../public/sass.svg"
import bootstrap from "@/../public/bootstrap.svg"
import styledcomponents from "@/../public/styled-components.svg"
import tailwind from "@/../public/tailwind-css.svg"
import node from "@/../public/nodejs.svg"
import react from "@/../public/react.svg"
import TS from "@/../public/typescript.svg"
import next from "@/../public/next-js.svg"
import java from "@/../public/java-4.svg"
import c from "@/../public/c.svg"
import { useState } from "react";
import TextDinamic from "../Texts/TextDinamic";


export default function Techs() {
    const [open, setOpen] = useState(false)
    return (
        <div className="
            flex flex-col items-center text-center gap-5
            md:grid md:grid-cols-2 md:gap-10 md:items-start md:text-start
            ">
            <div className="flex flex-col gap-5">
                <TextDinamic className="text-3xl font-bold" classNameDinamic="uppercase text-blue-700" text="Minhas " textDinamic1="Tecnologias" textDinamic2="Habilidades" />
                <TextCommon 
                    className="text-gray-400" 
                    text="Sempre busco aprimorar minhas bases com tecnologias, busco sempre me atualizar por dentro das tecnologias que estão em alta no mercado
                        de trabalho, desde que aprendi minha primeira linguagem de programação Java busco sempre me aprimorar para entrar no mercado, busquei cursos, construi projetos
                        que me ajudassem a tirar duvidas sobre as determinados temas, prezo pela busca do conhecimento e me dedico para melhorar sempre.
                        "
                    />
                <TextCommon 
                    className="text-gray-400"
                    text="Eu tenho pleno conhecimento e experiencia em HMTL, CSS, JavaScript, ReactJS, NodeJS, Bootstrap, TailwindCSS, TypeScript, NextJS, Sass, Styled Components, Java e C++"
                    />
            </div>
            <div className="
                p-5 rounded-3xl bg-black/80
                md:p-10
            ">
                <div className="
                    grid grid-cols-2 gap-5 items-center
                    md:grid-cols-3 
                    lg:grid-cols-4 lg:gap-8
                    ">
                    <Image src={html} alt="HTML" title="HTML"/>
                    <Image src={css} alt="CSS" title="CSS" />
                    <Image src={js} alt="JavaScript" title="JavaScript" />
                    <Image src={sass} alt="Sass" title="Sass" />
                    <Image src={bootstrap} alt="Bootstrap" title="Bootstrap" />
                    <Image src={styledcomponents} alt="Styled Componenst" title="StyledComponents" />
                    <Image src={tailwind} alt="TailwindCSS" title="TailwindCSS" />
                    <Image src={node} alt="NodeJs" title="NodeJs" />
                    <Image src={react} alt="ReactJs" title="ReactJs" />
                    <Image src={TS} alt="TypeScript" title="TypeScript" />
                    <Image className="bg-white rounded-full p-1" src={next} alt="NextJs" title="NextJs" />
                    <Image className="m-auto" src={java} alt="Java" width={55} title="Java" />
                    {open ? (
                        <>
                            <Image src={c} alt="C++" title="C++" />
                        </>
                    ) : null}
                </div>
                {!open ? (
                    <button className="text-blue-700 font-bold pt-5 transition-colors hover:text-white hover:border-b-4" onClick={() => setOpen(!open)}>Mostrar Mais</button>
                ) : (
                    <button className="text-blue-700 font-bold pt-5 transition-colors hover:text-white hover:border-b-4" onClick={() => setOpen(!open)}>Mostrar Menos</button>
                )}
            </div>
        </div>
    )
}