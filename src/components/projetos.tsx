import { link } from "fs";
import Card from "./Layout/card";
import SectionName from "./Layout/sectionName";

const projects = [
    {
        title: "Achei",
        image: "/projetos/achei.png",
        tags: ["PHP", "Laravel", "Bootstrap", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "Compartilhamos informações sobre comércios, promoções e novidades. Se você não quer perder nada, assine nossa newsletter.",
        link: "https://achei.tech"
    },
    {
        title: "SEIA",
        image: "/projetos/seia.png",
        tags: ["PHP", "Laravel", "Bootstrap", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "O SEIA Escolar é um sistema de gestão escolar que ajuda gestores, professores e alunos a gerenciar informações de alunos, matrículas, turmas, notas, frequência e outras funcionalidades essenciais para o dia a dia escolar.",
        link: "https://seiaescolar.com"
    },
    {
        title: "Conexão cidadã",
        tags: ["React Native", "TailwindCSS"],
        image: "/projetos/conexaocidada.png",
        description: "O Conexão Cidadã ajuda a conectar os cidadões com seus gestores, permitindo que os cidadões possam enviar suas demandas e acompanhar o andamento das mesmas.",
        linkDisponivel: "hidden",
    }
]

    

export default function Projetos() {
    return(
        <div className="my-12">
            <SectionName name="Projetos"  href="Projects" id="Projects"/>

            <div className="flex flex-wrap justify-center  gap-2 mt-6 ">
                {projects.map((project, index) => (
                    <Card 
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                        linkDisponivel={project.linkDisponivel}
                    />
                ))}
                
            </div>
                
        </div>
        
    )
}