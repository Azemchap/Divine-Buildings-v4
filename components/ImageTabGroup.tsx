'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'
import { Tab } from '@headlessui/react'
import { PlanInterface } from '@/utils/interface'

interface Props {
    plan: PlanInterface
}

export default function ImageTabGroup({ plan }: Props) {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="w-full max-w-2xl mx-auto block lg:max-w-none">
                <Tab.List className="grid grid-cols-6 gap-6">
                    {plan.images && plan.images.length > 0 ? (
                        plan?.images.map((image) => (
                            <Tab
                                key={image._key}
                                className="relative h-16 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50 top-4 left-2"

                            >
                                {({ selected }) => (
                                    <>
                                        <span className="absolute inset-0 rounded-md overflow-hidden ">
                                            {/* <Link href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" className='absolute bg-rose-600 z-40 w-12 h-6 top-4 left-2'>
                    </Link> */}
                                            <Image src={urlFor(image.asset).url()} alt="" className="w-full h-full object-center object-cover" width={1200}
                                                height={1200} />
                                        </span>
                                        <span
                                            className={cn(
                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </>
                                )}
                            </Tab>
                        ))
                    ) : (
                        <p>No images available.</p>
                    )}
                </Tab.List>
            </div>

            <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {plan.images && plan.images.length > 0 ? (
                    plan?.images.map((image) => (
                        <Tab.Panel key={image._key}>
                            {/* <Link href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" className='absolute bg-rose-600 z-40 w-12 h-6 top-4 left-2'>
            </Link> */}
                            <Image
                                src={urlFor(image.asset).url()}
                                alt={urlFor(image.asset).url()}
                                className="w-full h-full object-center object-cover rounded-lg "
                                width={1200}
                                height={1200}
                            />
                        </Tab.Panel>
                    ))
                ) : (
                    <p>No images available.</p>
                )}
            </Tab.Panels>
        </Tab.Group>
    )
}
