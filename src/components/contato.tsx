"use client"

import { PaperPlaneTilt } from "@phosphor-icons/react";

export default function Contato() {
    return (
        <div className="relative flex justify-center">
            <div className="absolute -top-6 bg-white rounded-full p-3">
                <PaperPlaneTilt size={25} className="text-cenoura" />
            </div>
            <div className="bg-cinzasm container rounded-md  px-6 mx-2 w-auto">
                <div className=" mx-auto py-14">
                    <h1 className="text-center text-1xl md:text-2xl font-bold text-white flex-col flex">
                        Ta pensando em criar algo incrivel? 
                        <span>
                            Entre em contato comigo!
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    )
}