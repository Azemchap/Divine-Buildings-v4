'use client'

import Image from 'next/image'
import React from 'react'


export default function AboutPage() {
    return (
        <div className="bg-white">
            <main>
                {/* Header */}
                <div className="py-16 lg:py-24 bg-white ">
                    <div className=" mx-auto  sm:px-6 container lg:px-8">
                        <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-indigo-700 text-center sm:text-5xl sm:leading-none lg:text-6xl">
                            About us
                        </h1>
                        <p className="mt-6 px-4 max-w-4xl mx-auto lg:text-lg leading-normal md:text-center text-gray-500 ">
                            Divine Buildings is a company founded in 2019 for the design, construction and project management of building projects. We are poised to help Cameroonians as well as those of other countries such as Nigerian, Ghana, South Africa, Sierra Leone, Gambia, Kenya, Zambia (at home and abroad) with the planning, design and management of their building projects.
                        </p>

                        <div className="relative bg-white my-16">
                            <div className="lg:absolute lg:inset-0">
                                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                                    <Image
                                        className="h-56 w-full object-cover lg:absolute lg:h-full"
                                        src="/images/hd03.jpg"
                                        alt="img"
                                        width={1200}
                                        height={1200}
                                    />
                                </div>
                            </div>
                            <div className="relative pt-16 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:container lg:mx-auto lg:grid lg:grid-cols-2">
                                <div className="lg:col-start-2 lg:pl-8">
                                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                                        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Strategy & Vision</h2>
                                        <div>
                                            <h3 className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                                Vision Statement
                                            </h3>
                                            <p className="mt-4 text-lg text-gray-500">
                                                To be the best in providing Cameroonians and Africans with everything required for successful building projects.
                                            </p>
                                        </div>
                                        <div className='mt-8'>
                                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                                Mission Statement
                                            </h3>
                                            <p className="mt-4 text-lg text-gray-500">
                                                To provide high quality design, project management and construction services to Cameroon and Africans.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
