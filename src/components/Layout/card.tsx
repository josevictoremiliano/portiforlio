"use client";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "@phosphor-icons/react";
interface CardProps {
  title: string;
  image: string;
  description?: string;
  descriptionModal?: string;
  link?: string;
  linkDisponivel?: string;
  buttonText?: string;
  tags?: string[];
}

export default function Card(props: CardProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="card max-w-full md:max-w-sm">
      <div className="card-header">
        <h4 className="text-xl">{props.title}</h4>
      </div>
        <div className="card-image relative">
            <div className="overlay absolute flex justify-center items-center hover:bg-black hover:bg-opacity-60 transition-all w-full h-full ">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md w-full h-full px-4 py-2 font-medium text-xl  text-white opacity-0 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Ver em tela cheia
                </button>
            </div>
            <Image
                src={props.image}
                alt={props.title}
                width={900}
                height={300}
                className="w-full object-cover h-36 md:h-76 cursor-pointer"
                onClick={openModal}
            />
        </div>

        {props.description ? (
        <div className="card-body">
          <p className="card-text text-md h-full md:h-[135px]">{props.description}</p>
        </div>
      ) : null}
      <div className="card-footer flex justify-center flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          {props.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-zinc-600 hover:bg-zinc-900 transition-all text-white px-3 py-1 text-sm rounded-full cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {props.linkDisponivel === "hidden" ? (
          <p className="text-zinc-900 bg-slate-100 py-1 px-2 rounded-md">Em breve</p>
        ) : (
          <></>
        )}
        <a
          href={props.link}
          className={`bg-acerola hover:bg-cenoura transition-colors shadow-md py-1 px-2 items-center justify-center flex rounded-md ${props.linkDisponivel}`}
          target="_blank" 
          aria-label={props.buttonText ? props.buttonText : "Acessar projeto" + " " + props.title}
        >
          {props.buttonText ? props.buttonText : "Acessar projeto"}
        </a>
      </div>



      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-cinzasm p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-200 flex justify-between items-center"
                  >
                    {props.title}

                    <X className="h-6 w-6 text-gray-200 hover:text-orange-400 cursor-pointer transition-all" onClick={closeModal} />
                  </Dialog.Title>
                  <div className="mt-2">
                    <Image
                      src={props.image}
                      alt={props.title}
                      width={900}
                      height={300}
                      className="w-[900px]"
                    
                    />
                    <p className="text-sm text-gray-500 my-3">{props.descriptionModal}</p>
                  </div>

                  <div className="mt-4 flex gap-4 flex-wrap justify-between items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-0 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Voltar
                    </button>

                    <a 
                        href={props.link}
                        className={`inline-flex justify-center rounded-md  bg-acerola px-4 py-2 text-sm font-medium text-white hover:bg-cenoura focus:outline-none focus-visible:ring-0 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${props.linkDisponivel}`}
                        target="_blank"
                    >
                        Acessar projeto
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
