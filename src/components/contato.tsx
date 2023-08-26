"use client"

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { PopupButton } from '@typeform/embed-react'

export default function Contato() {
    return (
        <div className="relative flex justify-center">
            <div className="absolute -top-6 bg-white rounded-full p-3">
                <PaperPlaneTilt size={25} className="text-cenoura" />
            </div>
            <div className="bg-cinzasm container rounded-md  px-6 mx-2 w-auto">
                <div className=" mx-auto py-12 pb-6">
                    <h1 className="text-center text-1xl md:text-2xl font-bold text-white flex-col flex">
                        Ta pensando em criar algo incrivel? 
                        <span>
                            Entre em contato comigo!
                        </span>
                        <PopupButton id="jX5mV4To" style={{ fontSize: 18 }} className="bg-cenoura hover:bg-orange-600 transition-all rounded-lg mt-8 my-4 px-4 py-2 self-center">
                            Toque-me
                        </PopupButton>
                    </h1>
                </div>
            </div>
        </div>
    )
}