'use client'
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

export const RedesSociais = [
    {
        nome: 'Github',
        link: 'https://github.com/josevictoremiliano',
        icon: <GithubLogo />,
    },
    {
        nome: 'Linkedin',
        link: 'https://www.linkedin.com/in/jose-victor-83334073/',
        icon: <LinkedinLogo />,
    },
    {
        nome: 'Instagram',
        link: 'https://www.instagram.com/j.victorms/',
        icon: <InstagramLogo />,
    }
]

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24" id="Contact">
            <div className="flex flex-row items-center justify-center space-x-4">
                {RedesSociais.map((redeSocial, index) => (
                    <a
                        key={index}
                        href={redeSocial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-gray-400 flex flex-row items-center justify-center gap-2"
                    >
                        {redeSocial.icon} {redeSocial.nome}
                    </a>
                ))}
            </div>
            <div className="flex flex-col items-center justify-center w-full h-24">
                <p className="text-gray-500">© 2023 José Victor Emiliano</p>
            </div>
        </footer>
    )
}