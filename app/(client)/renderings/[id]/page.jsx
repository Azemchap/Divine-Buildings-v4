'use client'
import ReactPlayer from "react-player";

import { Disclosure, Tab } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import Link from "next/link"
import { FaPhone, FaWhatsapp } from 'react-icons/fa6'
import { video } from '../../../utils/video'



export default function PanDetailPage({ params: { id } }) {

    console.log(video)

    const render = video.videos.find((x) => x.id === id)

    // console.log(video)
    if (!video) {
        return <div>Video Not Found</div>
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6  lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className=" mt-6 w-full max-w-2xl mx-auto block lg:max-w-none">
                            <div className="w-full h-72 rounded-lg overflow-hidden cursor-pointer relative">
                                <ReactPlayer
                                    width={500}
                                    height={300}
                                    url={render.src}
                                    controls={true}
                                    playing={true}
                                    loop={true}
                                    className="w-full h-full "
                                    // light is usefull incase of dark mode
                                    light={false}
                                    // picture in picture
                                    pip={true}
                                />
                                <source src={render.src} autoplay className="w-full h-full " type="video/mp4" />
                            </div>
                        </div>
                    </Tab.Group>

                    {/* video info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{render.name}</h1>


                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <div
                                className="text-base text-gray-700 space-y-6">{render.description}</div>
                        </div>

                        <form className="mt-6">
                            <div className="mt-10 flex gap-4 flex-col sm:flex-row">
                                <Link href="tel:+237651327377"
                                    className=" flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-2 justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full flex gap-2 items-center"
                                >
                                    <FaPhone /> Contact seller
                                </Link>
                                <Link href="https://wa.me/+237651327377 "
                                    className=" flex-1 bg-none border border-indigo-700 rounded-md py-3 px-2 justify-center text-base font-medium text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full flex gap-2 items-center"
                                >
                                    <FaWhatsapp /> Chat on Whatsapp
                                </Link>
                            </div>
                        </form>

                        <section aria-labelledby="details-heading" className="mt-12">
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>

                            <div className="border-t divide-y divide-gray-200">
                                {render.details.map((detail) => (
                                    <Disclosure as="div" key={detail.name}>
                                        {({ open }) => (
                                            <>
                                                <h3>
                                                    <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                                        <span
                                                            className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                                        >
                                                            {detail.name}
                                                        </span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusSmIcon
                                                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <PlusSmIcon
                                                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                                                    <ul role="list">
                                                        {detail.items.map((item) => (
                                                            <li key={item}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}



