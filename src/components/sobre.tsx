import Image from "next/image";
import SectionName from "./Layout/sectionName";
import MeNoBg from "/public/images/MeNoBg.png";

export default function Sobre() {
    return (
        <section className=" ">
            <SectionName name="Me Conheça" href="#About" id="About" />

            <div className="flex flex-col justify-between md:flex-row gap-4 mt-8">
                <div className="rounded-md p-4 md:max-w-[50%] lg:max-w-[70%]">
                    <h1 className="text-2xl font-bold text-white">Desenvolvedor Web & Web Designer Apaixonado por Criar Experiências Digitais Incríveis</h1>
                    <div className="text-justify">
                        <p className="text-white text-md mt-4 ">
                            Olá! Sou <span className="font-bold">José Victor</span>, um desenvolvedor web e web designer com mais de 4 anos de experiência transformando ideias em sites e aplicações
                                web de alta performance. Sou mestre em HTML, CSS, JavaScript React, Expo, React Native e Figma, com experiência em PHP, Java e WordPress.
                        </p>
                        <p>
                        Adoro desafios e estou sempre em busca de novas oportunidades para aprender e crescer. Se você está procurando um profissional 
                        dedicado e apaixonado por criar experiências digitais incríveis, vamos conversar!
                        </p>
                        <p className="mt-2 font-semibold">
                        Explore meu portfólio e entre em contato para  
                        <a href="mailto:contato@jotav.me" className="underline font-bold text-blue-300"> agendarmos uma reunião</a>.
                        </p>
                    </div>
                </div>

                <div className="rounded-md p-4 relative flex justify-center">
                    <div className="linearYellowRed bottom-0 absolute w-full rounded-md h-[85%] -z-10 "></div>
                    <Image src={MeNoBg} alt="Foto de José Victor" width={500} height={500} className="rounded-md hidden md:block md:w-[20em]" />
                </div>
            </div>
        </section>
    )
}