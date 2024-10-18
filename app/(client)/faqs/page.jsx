'use client'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    solutions: [
        { name: 'Cover Page' },
        { name: 'Sheet list' },
        { name: 'Site Plan' },
        { name: 'Roof Plan' },
        { name: 'Floor Plans' },
        { name: 'Transverse Section' },
        { name: 'Longitudinal Section' },
    ],
    solutions2: [
        { name: 'Front Elevation' },
        { name: 'Right Side Elevation' },
        { name: 'Left Side Elevation' },
        { name: 'Back Elevation' },
        { name: 'Furniture Layout' },
        { name: 'Door Schedule' },
        { name: 'Block quantities' },
        { name: 'Room Schedule and finishes' },
    ],
    support: [
        { name: 'Foundation layout' },
        { name: 'Base column details' },
        { name: 'Stair case details' },
        { name: 'First floor beams layout' },
        { name: 'First Floor slab' },
    ],
    company: [
        { name: 'Electrical schematic' },
        { name: 'Power points' },
        { name: 'Distribution boards' },
        { name: 'Bath/WC piping details' },
        { name: 'Septic tank details' },
    ],

}



const faqs = [
    {
        question: "What details are included after purchase of single storey buildings (bungalows)?",
        answer: [
            "For single storey buildings (bungalows)",
        ],
        more: [
            'Architectural drawings',
            "Electrical drawings",
            "Mechanical drawings"
        ],
    },
    {
        question: "What details are included after purchase of multi-storey buildings?",
        answer: [
            "For multi-storey buildings",
        ],
        more: [
            'Architectural drawings',
            "Electrical drawings",
            "Mechanical drawings",
            'Structural drawings'
        ],
    },
    {
        question: "How are payments made?",
        answer: [
            "The plan is delivered in PDF soft copies via email,hard copies are delivered via courier.",
        ], more: [],
    },
    {
        question: "Do you process planning approval?",
        answer: [
            "Planning approval is best processed for the owner by the planning office. We don’t process building plan approval but can recommend a party and help you through the process.",
        ], more: [],
    },
    {
        question: "What is the cost to construct the building?",
        answer: [
            "Building cost vary based on various factors such as location, finishes type of foundation, we can give you a rough estimate of the building. A detailed bill of quantities can be done after plan purchase as a separate item.",
        ], more: [],
    },
    {
        question: "Can we see the floor plan?",
        answer: [
            "Yes the floor plans/layouts are available to premium members. If you are a premium member, a discount which equals the membership fee will be given to you upon plan purchase. ",
        ], more: [],
    },
    {
        question: "What is the cost to construct the building?",
        answer: [
            "Building cost vary based on various factors such as location, finishes type of foundation, we can give you a rough estimate of the building. A detailed bill of quantities can be done after plan purchase as a separate item.",
        ], more: [],
    },
    {
        question: "Can adjustments be made to the floor plans?",
        answer: [
            "Yes we can modify floor plans to suit your requirements. This carries an additional fee due to the added scope of work.",
        ], more: [],
    },
    {
        question: "Can you build or supervise the building?",
        answer: [
            "Yes we build and supervise to achieve the desired outcome.",
        ], more: [],
    },
    {
        question: "What is the cost of the drawing?",
        answer: [
            "The drawing cost are listed within the plan information on the home page and store pages respectively.",
        ], more: [],
    },
    {
        question: "If I’m to modify a plan, how long will it take?",
        answer: [
            "This depends on the extent of modifications, the schedule will be advised upon the determining the scope of modification and prior to plan purchase."
        ], more: [],
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function FaqsPage() {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-indigo-700 sm:text-4xl">Frequently asked questions</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 h-7 flex items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500 mb-2">{faq.answer}</p>
                                            <p className="text-base text-gray-500">{faq.more.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
                <div className='max-w-3xl mx-auto'>
                    <h2 className=" text-3xl mt-16 font-extrabold text-indigo-700 sm:text-4xl">Other Information</h2>
                    <p className='text-lg text-gray-700 mt-4'>The listed plan costs do not apply to all States or countries due to the requirements for approval drawings in these places. Engineering drawings are charged separately for these states or country.</p>

                    <p className='text-xl font-bold text-gray-700 mt-16'> The various drawings and plans we do include:</p>
                    <div className="mt-8 grid grid-cols-2 gap-12 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-indigo-700 tracking-wider uppercase">Architecture drawings </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase"></h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.solutions2.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-indigo-700 tracking-wider uppercase">Mechanical and electrical drawings</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-indigo-700 tracking-wider uppercase">Structural drawings</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
