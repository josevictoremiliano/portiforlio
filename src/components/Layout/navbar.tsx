'use client'

import Image from "next/image"
import Logo from "../../../public/logo.png"
import { RedesSociais } from "@/components/Layout/footer"
import { GithubLogo, InstagramLogo, LinkedinLogo, List, X } from "@phosphor-icons/react"


import { useEffect, useState } from 'react'
import { title } from "process"

export default function Navbar() {
	const [isOpen, setisOpen] = useState(false)

	const toggleisOpen = () => {
		return isOpen == true ? setisOpen(false) : setisOpen(true)
	}

	useEffect(() => {
		{
			isOpen === true
				? document.body.classList.add('overflow-hidden')
				: document.body.classList.remove('overflow-hidden')
		}
	})
    return (<>

        {isOpen === true ? (
				<div className='sticky top-0 z-50'>
					<div
						className='fixed h-full inset-0   bg-zinc-600/40 backdrop-blur-sm flex w-screen '
						onClick={toggleisOpen}>
						<div className='w-full' />

						<div className=' px-1 relative  h-full w-full bg-zinc-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80'>
							
							<ul className='flex flex-col p-2 '>
                                <li>
                                    <button className="items-end  justify-end flex w-full" onClick={() => toggleisOpen()}>
                                        <X size={36} color="#fff" />
                                    </button>
                                </li>
                                {[
                                    ['Início', '#Home'],
                                    ['Sobre', '#About'],
                                    ['Acadêmico', '#Academic'],
                                    ['Projetos', '#Projects'],
                                    ['Contato', '#Contact'],
                                ].map(([title, url]) => (
                                    <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md' key={title}>
                                        <a href={url} className="block hover:text-orange-400 transition-all">{title}</a>
                                    </li>
                                ))}

                                <hr className="my-3"/>

                                <li className="flex  justify-center my-3">
                                    {RedesSociais.map((redeSocial, index) => (
                                        <li key={index} className="flex justify-center items-center space-x-3">
                                            <a
                                                key={index}
                                                href={redeSocial.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-200 hover:text-gray-900 bg-orange-600 hover:bg-orange-300 rounded-full p-3 shadow-lg transition-all font-bold text-2xl mx-2"
                                            >
                                                {redeSocial.icon}
                                            </a>
                                        </li>
                                    ))}
                                </li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				<div className='hidden' />
			)}
        <header className=" w-full py-2 px-3 bg-zinc-950 bg-opacity-75 fixed top-0 z-30">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Image src={Logo} alt="Logo" width={25} height={25} />
                <nav className="hidden md:flex ">
                    <ul className="flex space-x-4 text-md leading-6 font-semibold">
                        {[
                            ['Início', '#Home'],
                            ['Sobre', '#About'],
                            ['Acadêmico', '#Academic'],
                            ['Projetos', '#Projects'],
                            ['Contato', '#Contact'],
                        ].map(([title, url]) => (
                            <li key={title}><a href={url} className="hover:text-orange-400 transition-all">{title}</a></li>
                        ))}
                    </ul>
                </nav>
              
                <button className="flex md:hidden" onClick={() => toggleisOpen()}>
                    <List size={36} color="#fff" />
                </button>
            </div>
            
        </header>
        
        </>)
}

