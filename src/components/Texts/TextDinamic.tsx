"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

type TextDinamic = {
    text: string,
    textDinamic1: string,
    textDinamic2?: string,
    className: string,
    classNameDinamic: string,
}

export default function TextDinamic({text, textDinamic1, textDinamic2, className, classNameDinamic} : TextDinamic) {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`${textDinamic1}`,`${textDinamic2}`],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true,
        })
        return() => {
            typed.destroy()
        }
    },[])

    return (
        <p className={className}>{text}<span className={classNameDinamic} ref={el}></span></p>
    )
}