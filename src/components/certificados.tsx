"use client"
import { Asterisk } from "@phosphor-icons/react"
import Card from "./Layout/card"
import SectionName from "./Layout/sectionName"
import ImagemInfoWeb from "public/certificados/infoweb.png"

const certificados = [
    {
        title: "Certificado de técnico em informática para internet",
        image: ImagemInfoWeb,
        descriptionModal: "Certificado de conclusão do curso técnico integrado em informática para internet, com carga horária de 3995 horas.",
        tags: ["IFRN", "Técnico", "Informática", "Internet", "3995 horas"],
        link: "https://suap.ifrn.edu.br/media/diplomas_eletronicos/25a36806b83a11edb6170242c612fc82-temph25ENezH9Epm.pdf"
    }
]

export default function Certificados() {
    return(
        <div className="my-12 ">
            <SectionName name="Certificações"  href="Academic" id="Academic"/>

            <div className="flex flex-col items-start gap-3 my-2">
                <a href="https://suap.ifrn.edu.br/media/diplomas_eletronicos/25a36806b83a11edb6170242c612fc82-temph25ENezH9Epm.pdf" target="_blank" rel="noopener noreferrer" 
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        Técnico em informática para internet
                        <span className="text-xs text-yellowmd font-semibold block">instituto federal de educação ciência e tecnologia do rio grande do norte</span>
                    <span className="block font-bold text-xs">
                        Toque para abrir
                    </span>
                    </span>
                </a>
                <div
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        Web Design e Design Gráfico
                        <span className="text-xs text-yellowmd font-semibold block">InfoWere</span>
                    </span>
                </div>
                <div  
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        React JS e React Native
                        <span className="text-xs text-yellowmd font-semibold block">Rocketseat</span>
                    </span>
                </div>
                <div
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        Curso de informática Básica a avançada
                        <span className="text-xs text-yellowmd font-semibold block">Eco Cursos</span>
                    </span>
                </div>
                <div  
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        Word, Excel e Power Point
                        <span className="text-xs text-yellowmd font-semibold block">Eco Cursos</span>
                    </span>
                </div>
                <div  
                className="flex  hover:text-yellow-200 justify-center py-2 px-4 shadow">
                    <Asterisk size={25}  weight="bold" className="text-yellow-400" />
                    <span>
                        FIC - Inglês
                        <span className="text-xs text-yellowmd font-semibold block">IFRN</span>
                    </span>
                </div>
            </div>                
        </div>
        
    )
}