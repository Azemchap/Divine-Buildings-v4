interface Props {
    title: string
}

export default function ItemNotFound({ title = '' }: Props) {
    return (
        <section className=" p-4">
            <div className="container mx-auto p-16 rounded bg-rose-100">
                <h4 className="text-center text-sm text-rose-500 font-bold tracking-tight  sm:text-lg lg:px-6 capitalize">{title}</h4>
            </div>
        </section>
    )
}
