// @ts-nocheck
"use client"

import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { PlanInterface } from '@/utils/interface'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import PlanRating from './PlanRating'

interface Props {
    plan: PlanInterface
}

export default function PlanItem({ plan }: Props) {

    // Get the first image
    const firstImage = urlFor(plan?.images[0]).url()

    return (
        <div className='border rounded-lg overflow-hidden'>
            <div className="">
                <Link
                    href={`/plans/${plan?.slug?.current}`} className="w-full h-64  overflow-hidden cursor-pointer relative">
                    <Image src={firstImage} alt="" priority className="w-full h-64 object-center object-cover " width={1200}
                        height={1200} />
                </Link>
                <div className="m-4">
                    <Link
                        href={`/plans/${plan?.slug?.current}`} className="block text-md font-medium text-gray-900 text-left uppercase">{plan?.name}</Link>
                    <PlanRating rate={plan?.rating} count={plan?.numReview} />

                    <p className='text-xs text-gray-500 my-2'>{new Date(plan?.createdAt).toDateString()}</p>
                    <div className='flex items-center flex-wrap gap-2'>
                        {plan?.category.map((cat) => (
                            <Link key={cat?._id} href={`/category/${cat?.slug.current}`} className='lowercase p-[2px] px-3 rounded-full border text-xs border-indigo-400 text-indigo-700'>#{cat?.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="m-4">
                <Link href={`/plans/${plan?.slug?.current}`} className="block text-md text-center font-medium text-gray-900 uppercase border p-2 rounded-sm">View plan</Link>
            </div>
        </div>
    )
}
