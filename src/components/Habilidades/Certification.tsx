"use client"

import Alura from "@/../public/alura-logo.png"
import OBC from "@/../public/OBC-logo.jpg"
import CardCertification from "../Cards/CardCertification"
import { useState } from "react"

export default function Certification() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="
                grid grid-cols-1 gap-5
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                ">
                <CardCertification
                    image={Alura}
                    NameCertification="HTML5" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="CSS3" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="Formação Front-End" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="JavaScript com DOM" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="Bootstrap5" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="Flexbox e Grid" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="Layout Responsivos" 
                    Institution="Alura" 
                    Age="2022" 
                />
                <CardCertification
                    image={Alura}
                    NameCertification="SEO" 
                    Institution="Alura" 
                    Age="2022" 
                />
                {open ? (
                    <>
                    <CardCertification
                    image={OBC}
                    NameCertification="Trilha JavaScript" 
                    Institution="OneBitCode" 
                    Age="2023" 
                    />
                    <CardCertification
                        image={OBC}
                        NameCertification="Sass" 
                        Institution="OneBitCode" 
                        Age="2023" 
                    />
                    <CardCertification
                        image={OBC}
                        NameCertification="GitHub" 
                        Institution="OneBitCode" 
                        Age="2023" 
                    />
                    <CardCertification
                        image={OBC}
                        NameCertification="TailwindCSS" 
                        Institution="OneBitCode" 
                        Age="2023" 
                    />
                    <CardCertification
                    image={OBC}
                    NameCertification="TypeScript" 
                    Institution="OneBitCode" 
                    Age="2023" 
                    />
                    <CardCertification
                        image={OBC}
                        NameCertification="ReactJs" 
                        Institution="OneBitCode" 
                        Age="2023" 
                    />
                    <CardCertification
                        image={OBC}
                        NameCertification="NextJs" 
                        Institution="OneBitCode" 
                        Age="2023" 
                    />
                    </>
                ): null}
            </div>
            {!open ? (
                <button 
                    className="bg-sky-800 mt-10 px-5 py-2 rounded-full text-xl font-bold transition-colors hover:bg-blue-500" 
                    onClick={() => setOpen(!open)}>
                    Mostrar Mais
                </button>
            ) : (
                <button 
                    className="bg-sky-800 mt-10 px-5 py-2 rounded-full text-xl font-bold transition-colors hover:bg-blue-500" 
                    onClick={() => setOpen(!open)}>
                    Mostrar Menos
                </button>
            )}
        </div>
    )
}