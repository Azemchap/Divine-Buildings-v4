import Link from "next/link";

interface Props {
    title: string;
    links?: boolean;
}

export default function Title({ title = '', links = false }: Props) {
    return (
        <section className="pb-4">
            <h4 className="text-sm text-gray-700 font-bold tracking-tight  sm:text-xl lg:mb-4 mb-1 capitalize">{title}</h4>
            {
                links && (
                    <Link href={`/category`} className='lowercase p-[2px] px-3 rounded-full border text-xs border-indigo-400 text-indigo-700'>#categories</Link>
                )
            }
        </section>
    )
}
