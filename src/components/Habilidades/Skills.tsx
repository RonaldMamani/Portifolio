"use client"

import { useState } from "react"
import ButtonSkills from "../Buttons/ButtonsSkills"
import Techs from "./Techs"
import Education from "./Education"
import Certification from "./Certification"

export default function Skills() {
    const [skills, setSkills] = useState(true)
    const [education, setEducation] = useState(false)
    const [certificates, setCertificates] = useState(false)

    const onSkill = () => {
        setSkills(true)
        setEducation(false)
        setCertificates(false)
    }

    const onEducation = () => {
        setSkills(false)
        setEducation(true)
        setCertificates(false)
    }

    const onCertificate = () => {
        setSkills(false)
        setEducation(false)
        setCertificates(true)
    }

    return (
        <div className="
            px-4 py-4
            md:p-10
            lg:px-32 lg:pt-20
            ">
            <div className="
                flex flex-col gap-5
                md:flex-row md:justify-center md:gap-10">
                <ButtonSkills 
                    content="Habilidades" 
                    className={`${skills ? "text-sky-100 border-b-sky-50 border-b-4 font-extrabold" : "text-sky-700"}`} 
                    onClick={onSkill} />
                <ButtonSkills 
                    content="Formação / Cursos" 
                    className={`${education ? "text-sky-100 border-b-sky-50 border-b-4 font-extrabold" : "text-sky-700"}`} 
                    onClick={onEducation} />
                <ButtonSkills 
                    content="Certificados" 
                    className={`${certificates ? "text-sky-100 border-b-sky-50 border-b-4 font-extrabold" : "text-sky-700"}`} 
                    onClick={onCertificate}  />
            </div>
            <div className="
                px-5 py-10
                md:p-10
                lg:p-20">
                {skills ? (
                    <Techs />
                ): null}
                {education ? (
                    <Education />
                ): null}
                {certificates ? (
                    <Certification />
                ): null}
            </div>
        </div>
    )
}