import Link from "next/link";
import Linguagens from "./linguagens";
import Contato from "./contato";
import Social from "./social";
import ParticlesContainer from "./particlesContainer";

export default function Banner() {
    return(
        <section className="mb-4 w-full bg-center bg-contain bg-no-repeat bg-hero-pattern relative" id="Home">
            
            <div className="max-w-screen-xl mx-auto flex flex-col items-center relative">
                <div className="mt-[10em] mx-6">
                    <div className="text-white text-2xl md:text-4xl font-semibold">Olá! Eu sou </div>
                    <div className="linearGradientText text-5xl md:text-6xl font-bold ">José Victor</div>
                    <div className="max-w-2xl text-white  text-lg md:text-xl font-bold">Web design, design gráfico, técnico em Informática para Internet pelo IFRN/Brasil, residindo no Rio Grande do Norte-Brasil.</div>

                    <div className="flex mt-8 btn-banner">
                        <Link href="#About" className="bg-acerola text-white px-8 py-3 rounded-full font-bold mr-4 hover:bg-orange-700 transition-all">Me conheça</Link>
                        <Link 
                            href="https://1drv.ms/w/s!AtHHsCvSrvrAh71NMOigRvcm7X0I8A?e=sPP1dP" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Acessar meu currículo"
                            className="border-2 border-white hover:border-orange-400 hover:bg-orange-400 transition-all text-white px-8 py-3 rounded-full font-bold flex items-center"
                            >
                        Curriculo
                        </Link>
                    </div>
                    <Social/>
                </div>
                <ParticlesContainer />
                <div className="linearGradientBackgroundTransparent h-20 mb-16 w-full mt-16">
                    <Linguagens />
                </div>

                <Contato />
            </div>
        </section>
    )
}
    
