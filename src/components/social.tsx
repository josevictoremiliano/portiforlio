"use client"

import { RedesSociais } from "@/components/Layout/footer"

export default function Social() {
    return (
        <div className="block social relative md:absolute top-0 right-36">
            <div className="flex md:justify-center mt-6 md:mt-auto items-center md:flex-col gap-2 m2kl">
                <div className="bg-orange-400 rounded-2xl  w-1 h-36 hidden md:block "></div>
                {RedesSociais.map((redeSocial, index) => (
                        <div className="flex flex-col justify-center items-center" key={index}>
                            <a
                                key={index}
                                href={redeSocial.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-200 hover:text-gray-900 bg-orange-600 hover:bg-orange-300 rounded-full p-3 shadow-lg transition-all font-bold text-2xl mx-2"
                            >
                                {redeSocial.icon}
                            </a>
                        </div>
                    ))}
            </div>
        </div>
    )
}