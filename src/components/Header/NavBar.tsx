"use client"

import { useState } from "react"

import hamburger from "@/../public/icon-hamburger.svg"
import close from "@/../public/icon-close.svg"
import Image from "next/image"

export default function NavBar() {

    const [open, setOpen] = useState(true)

    return (
        <nav className="relative">
            <div className="max-[1023px]:hidden flex gap-10">
                <a href="#sobre" className="
                    uppercase text-blue-500 font-bold 
                    hover:text-white hover:border-b-4 hover:pb-1 hover:border-b-white 
                    transition-colors">
                    Sobre
                </a>
                <a href="#tecnologias" className="
                    uppercase text-blue-500 font-bold 
                    hover:text-white hover:border-b-4 hover:pb-1 hover:border-b-white 
                    transition-colors">
                    Tecnologias
                </a>
                <a href="#" className="
                    uppercase text-blue-500 font-bold 
                    hover:text-white hover:border-b-4 hover:pb-1 hover:border-b-white 
                    transition-colors">
                    Projeto
                </a>
                <a href="#" className="
                    uppercase text-blue-500 font-bold 
                    hover:text-white hover:border-b-4 hover:pb-1 hover:border-b-white 
                    transition-colors">
                    Contato
                </a>
            </div>
            <button className="lg:hidden relative" onClick={() => setOpen(!open)}>
                {open ? (
                    <Image src={hamburger} alt="Icone Hamburger" />
                ) : (
                    <Image src={close} alt="Icone Close" />
                )}
            </button>
            <div className={`${open ? "hidden" : "absolute right-3 top-8"} 
                flex flex-col gap-5 items-center bg-white p-5 rounded-2xl`}>
                <a href="#sobre" className="
                    uppercase text-black font-bold 
                    hover:text-blue-500
                    transition-colors">
                    Sobre
                </a>
                <a href="#" className="
                    uppercase text-black font-bold 
                    hover:text-blue-500
                    transition-colors">
                    Tecnologias
                </a>
                <a href="#tecnologias" className="
                    uppercase text-black font-bold 
                    hover:text-blue-500
                    transition-colors">
                    Projetos
                </a>
                <a href="#" className="
                    uppercase text-black font-bold 
                    hover:text-blue-500
                    transition-colors">
                    Contato
                </a>
            </div>
        </nav>
    )
}