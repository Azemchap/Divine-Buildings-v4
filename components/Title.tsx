interface Props {
    title: string
}

export default function Title({ title = '' }: Props) {
    return (
        <h4 className="px-4 text-sm text-gray-700 font-bold tracking-tight  sm:text-xl mb-8 lg:px-6 capitalize">{title}</h4>
    )
}
