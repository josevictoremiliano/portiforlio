import { link } from "fs";
import Card from "./Layout/card";
import SectionName from "./Layout/sectionName";
import ImageAchei from "/public/projetos/achei.png"
import ImagemSeia from "/public/projetos/seia.png"
import ImagemConexaoCidadao from "/public/projetos/conexaocidada.png"
import ImagemLux from "/public/projetos/lux.png"
import ImagemNeep from "/public/projetos/neep.png"


const projects = [
     {
        title: "Redesign do SigEduc",
        tags: ["Figma", "HTML", "CSS", "JavaScript"],
        image: "/projetos/sigeduc.png",
        description: "Redesign do SigEduc para se adequar aos padrões visuais da Web atuais e possibilitando melhorias de UX/UI.",
        link: "https://josevictoremiliano.github.io/SigEduc/index.html"
    },
    {
        title: "Achei",
        image: ImageAchei,
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "Compartilhamos informações sobre comércios, promoções e novidades.",
        linkDisponivel: "hidden"
    },
    {
        title: "SEIA",
        image: ImagemSeia,
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "O SEIA Escolar é um sistema de gestão escolar que ajuda gestores, professores e alunos a gerenciar informações de alunos, matrículas, turmas, notas, frequência e outras funcionalidades essenciais para o dia a dia escolar.",
        linkDisponivel: "hidden"
    },
    {
        title: "Conexão cidadã",
        tags: ["React Native", "TailwindCSS", "Figma", "TypeScript"],
        image: ImagemConexaoCidadao,
        description: "O Conexão Cidadã ajuda a conectar os cidadães com seus gestores, permitindo que os cidadães possam enviar queixas ou requisições direto para seus gestores, trazendo maior transparência e agilidade para o processo.",
        linkDisponivel: "hidden",
    },
    {
        title: "Lux",
        tags: ["React", "TailwindCSS", "Figma"],
        image:ImagemLux,
        description: "Lux é uma rede social pensada de forma unica e singular para cada usuário, onde você pode compartilhar seus momentos, fotos, vídeos, textos e muito mais. De forma simples e intuitiva.",
        linkDisponivel: "hidden",
    },
    {
        title: "Site do PEPP - IFRN/SPP",
        tags: ["Figma", "HTML", "PHP", "Laravel"],
        image: ImagemNeep,
        description: "Site do PEPP - IFRN/SPP, desenvolvido para o projeto de extensão do IFRN Campus São Paulo do Potengi, para uso de um portfolio de cursos e do campus.",
        linkDisponivel: "hidden",
    }
]

    

export default function Projetos() {
    return(
        <div className="my-12">
            <SectionName name="Projetos"  href="#Projects" id="Projects"/>

            <div className="flex flex-wrap justify-center  gap-2 mt-6 mx-2">
                {projects.map((project, index) => (
                    <Card 
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        descriptionModal={project.description}
                        tags={project.tags}
                        link={project.link}
                        linkDisponivel={project.linkDisponivel}
                    />
                ))}
                
            </div>
                
        </div>
        
    )
}
