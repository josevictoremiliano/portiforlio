'use client'

import Image from "next/image"
import Logo from "../../../public/logo.png"
import { GithubLogo, InstagramLogo, LinkedinLogo, List, X } from "@phosphor-icons/react"


import { useEffect, useState } from 'react'

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
                                <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md'>
                                    <a href='#Home' className="block hover:text-blue-400 transition-all">Inicio</a>
                                </li>
                                <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md'>
                                    <a href='#About' className="block hover:text-blue-400 transition-all">Sobre</a>
                                </li>
                                <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md'>
                                    <a href='#Academic' className="block hover:text-blue-400 transition-all">Formação Acadêmica</a>
                                </li>
                                <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md'>
                                    <a href='#Projects' className="block hover:text-blue-400 transition-all">Projetos</a>
                                </li>
                                <li className='py-5 pl-3 hover:bg-zinc-900 rounded-md'>
                                    <a href='#Contact' className="block hover:text-blue-400 transition-all">Contato</a>
                                </li>

                                <hr className="my-3"/>

                                <li className="flex  justify-center my-3">
                                    <li className='py-5 pl-3 '>
                                        <a href="https://www.instagram.com/j.victorms/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                            <InstagramLogo size={36} color="#09f1ed" weight="light" />
                                        </a>
                                    </li>
                                    <li className='py-5 pl-3  '>
                                        <a href="https://www.linkedin.com/in/jose-victor-83334073/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                            <LinkedinLogo size={36} color="#09f1ed" weight="light" />
                                        </a>
                                    </li>
                                    <li className='py-5 pl-3 '>
                                        <a href="https://github.com/josevictoremiliano" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                            <GithubLogo size={36} color="#09f1ed" weight="light" />
                                        </a>
                                    </li>
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
                        <li><a href='#Home' className="hover:text-blue-400 transition-all">Inicio</a></li>
                        <li><a href='#About' className="hover:text-blue-400 transition-all">Sobre</a></li>
                        <li><a href='#Academic' className="hover:text-blue-400 transition-all">Formação Acadêmica</a></li>
                        <li><a href='#Projects' className="hover:text-blue-400 transition-all">Projeto</a></li>
                        <li><a href='#Contact' className="hover:text-blue-400 transition-all">Contato</a></li>
                    </ul>
                </nav>
              
                <button className="flex md:hidden" onClick={() => toggleisOpen()}>
                    <List size={36} color="#fff" />
                </button>
            </div>
            
        </header>
        
        </>)
}

