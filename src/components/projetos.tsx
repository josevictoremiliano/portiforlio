import { link } from "fs";
import Card from "./Layout/card";
import SectionName from "./Layout/sectionName";
import image from "next/image";

const projects = [
    {
        title: "Achei",
        image: "/projetos/achei.png",
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "Compartilhamos informações sobre comércios, promoções e novidades. Se você não quer perder nada, assine nossa newsletter.",
        link: "https://achei.tech"
    },
    {
        title: "SEIA",
        image: "/projetos/seia.png",
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "O SEIA Escolar é um sistema de gestão escolar que ajuda gestores, professores e alunos a gerenciar informações de alunos, matrículas, turmas, notas, frequência e outras funcionalidades essenciais para o dia a dia escolar.",
        link: "https://seiaescolar.com"
    },
    {
        title: "Conexão cidadã",
        tags: ["React Native", "TailwindCSS", "Figma", "TypeScript"],
        image: "/projetos/conexaocidada.png",
        description: "O Conexão Cidadã ajuda a conectar os cidadães com seus gestores, permitindo que os cidadães possam enviar queixas ou requisições direto para seus gestores, trazendo maior transparência e agilidade para o processo.",
        linkDisponivel: "hidden",
    },
    {
        title: "Lux",
        tags: ["React", "TailwindCSS", "Figma"],
        image: "/projetos/lux.png",
        description: "Lux é uma rede social pensada de forma unica e singular para cada usuário, onde você pode compartilhar seus momentos, fotos, vídeos, textos e muito mais. De forma simples e intuitiva.",
        linkDisponivel: "hidden",
    },
    {
        title: "Redesign do SigEduc",
        tags: ["Figma", "HTML", "CSS", "JavaScript"],
        image: "/projetos/sigeduc.png",
        description: "Redesign do SigEduc para se adequar aos padrões visuais da Web atuais e possibilitando melhorias de UX/UI.",
        link: "https://josevictoremiliano.github.io/SigEduc/index.html"
    },
    {
        title: "Site do PEPP - IFRN/SPP",
        tags: ["Figma", "HTML", "PHP", "Laravel"],
        image: "/projetos/neep.png",
        description: "Site do PEPP - IFRN/SPP, desenvolvido para o projeto de extensão do IFRN Campus São Paulo do Potengi, para uso de um portfolio de cursos e do campus.",
        linkDisponivel: "hidden",
    }
]

    

export default function Projetos() {
    return(
        <div className="my-12">
            <SectionName name="Projetos"  href="Projects" id="Projects"/>

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