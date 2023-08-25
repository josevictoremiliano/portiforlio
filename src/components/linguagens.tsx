import Image from "next/image"
import stars from "public/star.png"

const linguagens = [
    "Python",
    "ZenScript",
    "React_Native",
    "SQL",
    "JavaScript",
    "React",
    "Figma",
    "GitHub",
    "HTML",
    "CSS",
    "TypeScript",
    "Java",
    "PHP"
]

export default function Linguagens() {
    return (
        <div className="linearWhiteBackgroundTransparent flex gap-16 items-center flex-nowrap overflow-hidden py-6 -rotate-6">
            {linguagens.map((linguagem, index) => (
                <div key={index} className="text-cenoura text-1xl md:text-2xl font-bold flex gap-12 ">
                    <div className="block w-auto">{linguagem}</div>
                    <Image src={stars} width={30} height={30} alt={linguagem} />
                </div>
            ))}
        </div>
    )
}