import Link from "next/link";

interface SectionNameProps {
    name: string;
    href: string;
    id: string;
}

export default function SectionName(props: SectionNameProps) {
    return(
        <Link href={props.href} id={props.id} className="flex items-center gap-2">
            <span className="text-3xl">#</span>
            <div className="linearGradientText text-xl md:text-2xl font-semibold transition-all cursor-pointer">{props.name}</div>
            <hr className="border-yellowmd w-[16rem]"/>
        </Link>
    )
}
    