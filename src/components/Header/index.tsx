"use client"

import Image from "next/image";
import { useState } from "react";

import logo from "@/../public/logo.svg"
import NavBar from "./NavBar";

export default function Header() {

    const [open, setOpen] = useState(false)

    return (
        <header className="
            px-4 py-4 bg-black flex justify-between
            md:p-10
            lg:px-32 lg:py-14
            ">
            <Image src={logo} alt="logotipo" />
            <NavBar />
        </header>
    )
}