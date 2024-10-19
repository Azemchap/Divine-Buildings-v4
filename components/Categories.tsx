import { CategoryInterface } from '@/utils/interface'
import Link from 'next/link'
import { client } from '../sanity/lib/client'

async function getCategories() {
    const query =
        ` *[_type == "category"] {
            name,
            slug,
            _id,
            "categoryCount": count(*[_type == 'plan' && references('category', ^._id)])
        }`

    const data = await client.fetch(query)
    return data
}

export const revalidate = 60;

export default async function Categories() {
    const categories: CategoryInterface[] = await getCategories()
    // console.log(categories)

    return (
        <div className="flex items-center flex-wrap gap-2">
            {categories?.length > 0 && categories.map((cat) => (
                <Link key={cat?._id} href={`/category/${cat?.slug.current}`} className='lowercase p-[2px] px-3 rounded-full border text-xs border-indigo-400 text-indigo-700'>#{cat?.name} ({cat?.categoryCount})</Link>
            ))}
        </div>
    )
}
