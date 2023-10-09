"use client"

import { useState } from "react"

import hamburger from "@/../public/icon-hamburger.svg"
import close from "@/../public/icon-close.svg"
import Image from "next/image"
import LinkDesk from "./LinkDesk"
import LinkMobile from "./LinkMobile"

export default function NavBar() {

    const [open, setOpen] = useState(true)

    return (
        <nav className="relative">
            <div className="max-[1023px]:hidden flex gap-5">
                <LinkDesk Ref="#sobre" content="Sobre" />
                <LinkDesk Ref="#tecnologias" content="Tecnologias" />
                <LinkDesk Ref="#projetos" content="Projetos" />
                <LinkDesk Ref="#contato" content="Contato" />
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
                <LinkMobile Ref="#sobre" content="Sobre"/>
                <LinkMobile Ref="#tecnologias" content="Tecnologias" />
                <LinkMobile Ref="#projetos" content="Projetos" />
                <LinkMobile Ref="#contato" content="Contato" />
            </div>
        </nav>
    )
}