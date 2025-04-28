import { link } from "fs";
import Card from "./Layout/card";
import SectionName from "./Layout/sectionName";
import ImageAchei from "/public/projetos/achei.png"
import ImagemSeia from "/public/projetos/seia.png"
import ImagemConexaoCidadao from "/public/projetos/conexaocidada.png"
import ImagemLux from "/public/projetos/lux.png"
import ImagemNeep from "/public/projetos/neep.png"
import ImagemFinOrg from "/public/projetos/finOrganize.png"
import ImageSigEduc from "/public/projetos/sigeduc.png"
import ImageDoceriaSmart from "/public/projetos/doceriaSmart.png"


const projects = [
    {
        title: "FinOrganize",
        tags: ["React", "NextJS", "TailwindCSS", "ShadcnUI", "PWA"],
        image: ImagemFinOrg,
        description: "FinOrganize é um aplicativo web que ajuda você a organizar suas finanças de forma simples e prática, podendo ser instalado como um aplicativo PWA. Gerencie saldos, despesas fixas ou mensais, controle vencimento dos seus cartões e ainda gere relatorios anuais ou mensais.",
        link: "https://finance.jotav.me",
    },
    {
        title: "Doceria Smart",
        tags: ["Filament", "Laravel", "PHP", "TailwindCSS"],
        image: ImageDoceriaSmart,
        description: "A Doceria Smart é um sistema criado para a cliente Flávia de gestão para confeiteiras que trabalham em casa ou em um ateliê reunindo tudo o que uma boa confeiteira precisa para controlar sua produção, pedidos, clientes, receitas, precificação e finanças, em um só lugar.",
        link: "https://gestao.doceriasmart.com",
    },
     {
        title: "Redesign do SigEduc",
        tags: ["Figma", "HTML", "CSS", "JavaScript"],
        image: ImageSigEduc,
        description: "Redesign do SigEduc para se adequar aos padrões visuais da Web atuais e possibilitando melhorias de UX/UI.",
        link: "https://josevictoremiliano.github.io/SigEduc/index.html"
    },
    {
        title: "Achei",
        image: ImageAchei,
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "Compartilhamos informações sobre comércios, promoções e novidades.",
        linkDisponivel: "hidden",
    },
    {
        title: "SEIA",
        image: ImagemSeia,
        tags: ["PHP", "Laravel", "Bootstrap", "Figma", "JavaScript", "jQuery", "HTML", "CSS"],
        description: "O SEIA Escolar é um sistema de gestão escolar que ajuda gestores, professores e alunos a gerenciar informações de alunos, matrículas, turmas, notas, frequência e outras funcionalidades essenciais para o dia a dia escolar.",
        linkDisponivel: "hidden",
        figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3TIu7K5hbtgCr2BMFJDd33%2FSEIA%3Fnode-id%3D1-10%26t%3DuGD9pRsmnkc6ZxK2-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D1%253A3%26starting-point-node-id%3D1%253A10"
    },
    {
        title: "Conexão cidadã",
        tags: ["React Native", "TailwindCSS", "Figma", "TypeScript"],
        image: ImagemConexaoCidadao,
        description: "O Conexão Cidadã ajuda a conectar os cidadães com seus gestores, permitindo que os cidadães possam enviar queixas ou requisições direto para seus gestores, trazendo maior transparência e agilidade para o processo.",
        linkDisponivel: "hidden",
        figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpCKUhBU7YkRQ6cXQQUVETG%2FConex%25C3%25A3o-cidad%25C3%25A3%3Fnode-id%3D29-1104%26t%3DWuxenkDw2wiiUlQX-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D29%253A1104"
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
                        figma={project.figma}
                    />
                ))}
                
            </div>
                
        </div>
        
    )
}
