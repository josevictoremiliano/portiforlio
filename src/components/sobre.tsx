import Image from "next/image";
import SectionName from "./Layout/sectionName";
import MeNoBg from "/public/images/MeNoBg.png";

export default function Sobre() {
    return(
        <section className=" ">
            <SectionName name="Sobre" href="#About" id="About" />

            <div className="flex flex-col justify-between md:flex-row gap-4 mt-8">
                <div className="rounded-md p-4 md:max-w-[50%] lg:max-w-[70%]">
                    <h1 className="text-2xl font-bold text-white">Quem sou eu?</h1>
                    <p className="text-white text-lg mt-4">
                        Sou José Victor, um desenvolvedor web e web designer com mais de 4 anos de experiência. Sou especialista em HTML, CSS, JavaScript e PHP. Também tenho experiência em plataformas web design como WordPress e Figma.
                        Estou confiante de que minhas habilidades e experiência me qualificam para uma posição no mercado de trabalho. Estou animado para usar minhas habilidades para criar sites e aplicações web bonitos, funcionais e fáceis de usar.
                        Estou sempre procurando novos desafios e oportunidades para aprender e crescer. Estou ansioso para me juntar a uma equipe que valorize a inovação e a criatividade.
                    </p>
                </div>

                <div className="rounded-md p-4 relative flex justify-center">
                    <div className="linearYellowRed bottom-0 absolute w-full rounded-md h-[85%] -z-10 "></div>
                    <Image src={MeNoBg} alt="Foto de José Victor" width={500} height={500} className="rounded-md hidden md:block md:w-[20em]" />
                </div>
            </div>
        </section>
    )
}