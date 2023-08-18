import Image from "next/image";

interface CardProps {
    title: string;
    image: string;
    description?: string;
    link?: string;
    linkDisponivel?: string;
    tags?: string[];
}


export default function Card(props: CardProps) {



    return(
        <div className="card max-w-full md:max-w-sm">
            <div className="card-header">
                <h4 className="text-xl">{props.title}</h4>
            </div>
            <Image 
                src={props.image} 
                alt={props.title} 
                width={900} 
                height={300}
                className="w-full object-cover h-36 md:h-76 "
            />

            <div className='card-body'>
                <p className="card-text h-full md:h-[144px]">{props.description}</p>
            </div>
            <div className="card-footer flex justify-center flex-col items-center gap-4">
                <div className="flex flex-wrap gap-2">
                    {props.tags?.map((tag, index) => (
                        <span key={index} className="bg-zinc-600 hover:bg-zinc-900 transition-all text-white px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>

                <a href={props.link} className={`bg-acerola hover:bg-cenoura transition-colors shadow-md p-3 rounded-full ${props.linkDisponivel}`}>Ver projeto</a>
            </div>
        </div>
    )
}