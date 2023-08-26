"use client"

import { RedesSociais } from "@/components/Layout/footer"

export default function Social() {
    return (
        <div className="social">
            {RedesSociais.map((redeSocial, index) => (
                    <a
                        key={index}
                        href={redeSocial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-gray-400 flex flex-row items-center justify-center gap-2"
                    >
                        {redeSocial.icon} {redeSocial.nome}
                    </a>
                ))}
        </div>
    )
}