"use client"
import { Asterisk } from "@phosphor-icons/react"
import Card from "./Layout/cardCertificacoes"
import SectionName from "./Layout/sectionName"
const certificados = [
    {
        title: "Certificado de técnico em informática para internet",
        description: "Certificado de conclusão do curso técnico integrado em informática para internet, com carga horária de 3995 horas.",
        tags: ["IFRN", "Técnico", "Informática", "Internet", "3995 horas"],
        link: "https://drive.google.com/file/d/19ogw8HbWe8lxmfta8-tIiRwO-wh_Ye2D/view?usp=sharing"
    },
    {
        title: "Certificações da Google cloud skills boost em 2024",
        description: "Build and Secure Networks in Google Cloud, Implement Load Balancing on Compute Engine, Perform Foundational Data, ML, and AI Tasks in Google Cloud, Perform Foundational Infrastructure Tasks in Google Cloud e Build and Secure Networks in Google Cloud.",
        tags: ["Google Cloud", "Skills Boost", "2024"],
        link: "https://www.cloudskillsboost.google/public_profiles/6a3d5f9b-54a5-4ff7-b17d-5c82c04beed1?locale=pt_BR"
    },
    {
        title: "Certificação Em iniciente em programação ORACLE - ONE",
        description: "Certificação de conclusão do programa de iniciante em programação pela ORACLE  oferecido pela ALURA - ORACLE ONE T7, com carga horária de 72 horas.",
        tags: ["Oracle","ONE" ,"Iniciante em programação", "72 horas", "T7"],
        link: "https://drive.google.com/file/d/1109jxnW8OBLhgZ1ejSCd_mVYv247WO1c/view?usp=sharing"
    },
    {
        title: "Certificado de web design e design gráfico",
        description: "Certificado de conclusão do curso de web design e design gráfico, com carga horária de 40 horas.",
        tags: ["InfoWere", "Web Design", "Design Gráfico", "40 horas"],
    },
    {
        title: "Certificado de React JS e React Native",
        description: "Certificado de conclusão do curso de React JS e React Native, com carga horária de 40 horas.",
        tags: ["Rocketseat", "React JS", "React Native", "40 horas"],
    },
    {
        title: "Certificado de Melhor ideia empreendedora de 2023 no IFRN",
        description: "Certificado de melhor ideia empreendedora de 2023 no IFRN, com o projeto de um site para reunir informaçãoes como um centro de comercio local paraa pequenas cidades do RN.",
        tags: ["IFRN", "Melhor ideia empreendedora", "2023", "Site", "Comercio local"],
        link: "https://drive.google.com/file/d/1BaPEXUX4Gc08tpj5HJ-wmTDQgidAIa_H/view?usp=sharing"
    },
    {
        title: "Certificado de curso de informática básica a avançada",
        description: "Certificado de conclusão do curso de informática básica a avançada, com carga horária de 40 horas.",
        tags: ["Eco Cursos", "Informática", "Básica", "Avançada", "40 horas"],
    },
    {
        title: "Certificado de Word, Excel e Power Point",
        description: "Certificado de conclusão do curso de Word, Excel e Power Point, com carga horária de 40 horas.",
        tags: ["Eco Cursos", "Word", "Excel", "Power Point", "40 horas"],
    },
    {
        title: "Certificado de FIC - Inglês",
        description: "Certificado de conclusão do curso de Formação Inicial e Continuada em Inglês, com carga horária de 40 horas.",
        tags: ["IFRN", "FIC", "Inglês", "40 horas"],
    }
]

export default function Certificados() {
    return(
        <div className="my-12 ">
            <SectionName name="Certificações e diplomas"  href="#Academic" id="Academic"/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                {certificados.map((certificado, index) => (
                    <Card key={index} title={certificado.title} description={certificado.description} tags={certificado.tags} link={certificado.link} />
                ))}
            </div>             
        </div>
        
    )
}
